import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Suites/Hero';
import Highlight from '@/components/Suites/Highlight';
import Results from '@/components/Suites/Results';
import { PROPERTIES_DATA } from '@/constants/constants';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Result } from 'postcss';
import React from 'react'

export default function Suite() {
    const router = useRouter();
    const { suite } = router.query;
    const suiteIndex = Number(suite);
    return (
        <Layout>
          {/* <Hero></Hero> */}
          <Hero suite={suiteIndex}></Hero>
          <Results suite={suiteIndex}></Results>
          <Highlight></Highlight>
          {/* <h1>{PROPERTIES_DATA[suite].title}</h1> */}
        </Layout>
      );
}
