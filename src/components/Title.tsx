import Head from 'next/head';

interface TitleProps {
  title: string;
  description?: string;
}

export default function Title({ title, description }: TitleProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || 'Track your daily moods and feelings.'} />
    </Head>
  );
}
