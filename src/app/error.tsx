'use client';

import { Metadata } from 'next';
import { LangVars } from '@/constants/lang';
import ErrorBlock from '@/components/ErrorBlock';

const { name } = LangVars.Metadata;

export const metadata: Metadata = {
  title: `${name} ~ Oops: Something went wrong!`,
};

const Error = ({ reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return <ErrorBlock action={reset} />;
};

export default Error;
