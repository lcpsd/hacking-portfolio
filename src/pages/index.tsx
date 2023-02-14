import { client } from "@/config/sanity";
import { SanitySchemaProps } from "@/types/Sanity";
import { GetStaticProps } from "next";

interface HomeProps {
  profile: SanitySchemaProps;
  social: SanitySchemaProps;
  certification: SanitySchemaProps;
}

export default function Home({ profile, social, certification }: HomeProps) {
  return <div>OK</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const profile = await client.fetch(`*[_type == "profile"]`);
  const social = await client.fetch(`*[_type == "profile"]`);
  const certification = await client.fetch(`*[_type == "profile"]`);

  return {
    props: {
      profile,
      social,
      certification,
    },
  };
};
