// Inspired by this article: https://blog.adriaan.io/validate-email-addresses-with-mx-records-in-node-js.html
// Thank you!
import { MxRecord } from 'dns';
import { Resolver } from 'dns/promises';
import { IValidator, IField } from '@/interfaces/app';
import { DomainCheckTypes } from '@/constants/enums';
import { LangVars } from '@/constants/lang';

class DomainValidator implements IValidator<string, IField<string>> {
  private errors: IField<string>;
  private validationType: DomainCheckTypes;
  private dnsServers = [
    '1.1.1.1', // Cloudflare
    '1.0.0.1', // Cloudflare
    '8.8.8.8', // Google
    '8.8.4.4', // Google
    '208.67.222.222', // OpenDNS
    '208.67.220.220', // OpenDNS
  ];

  private resolverOptions = {
    timeout: 3000,
    tries: Math.min(4, this.dnsServers.length),
  };

  constructor(validationType: DomainCheckTypes = DomainCheckTypes.MX) {
    this.validationType = validationType;
    this.errors = {};
  }

  public getErrors() {
    return this.errors;
  }

  public async validate(value: string): Promise<boolean> {
    this.errors = {};
    const { notFound, couldNotResolve } = LangVars.Validation.DomainValidator;
    let response: { isValid: boolean; addresses: string[] | MxRecord[]; error?: unknown };

    const result = value.includes('@') ? value.split('@') : value.match(/(?:https?:\/\/)?(?:www\.)?((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})/);

    if (!result || !result[1]) {
      this.errors = { domain: notFound };

      return false;
    }

    const domain = result[1];

    try {
      const resolver = new Resolver(this.resolverOptions);
      resolver.setServers(this.dnsServers);

      let addresses;
      switch (this.validationType) {
        case 'mx':
          addresses = await resolver.resolveMx(domain);
          break;
        case 'lookup':
          addresses = await resolver.resolve(domain);
          break;
        case 'ns':
          addresses = await resolver.resolveNs(domain);
          break;
        default:
          throw new Error(couldNotResolve);
      }

      if (Array.isArray(addresses) && addresses.length > 0) {
        response = { isValid: true, addresses };
      } else {
        this.errors = { domain: couldNotResolve };
        response = { isValid: false, addresses: [] };
      }
    } catch (_) {
      this.errors = { domain: couldNotResolve };
      response = { isValid: false, addresses: [] };
    }

    return response.isValid;
  }
}

export default DomainValidator;
