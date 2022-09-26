import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import Block2 from "@/templates/blocks/block-2/block-2";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
    <><Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Block2 content={props.aboutEventsTeaserContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'about'});
  return {
    props: props,
    revalidate: 10
  };
}