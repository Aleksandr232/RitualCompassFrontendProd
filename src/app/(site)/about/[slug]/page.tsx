import {Metadata } from "next";
import styles from "../page.module.css";
import fetchAboutRequest from "@/helpers/fetchAboutRequest/fetchAboutRequest";
import API from "@/utils/api/api";
import { IAboutSlugProps } from "@/interface/interface.slug";
import AboutMain from "../Layout/AboutMain/PlacesMain";
import AboutHeaderSlug from "./Layout/AboutHeaderSlug/AboutHeaderSlug";
import AboutMainSlug from "./Layout/AboutMainSlug/AboutMainSlug";
import Footer from "@/Layout/Footer/Footer";

type generateMetadataProps = {
  params: { slug: IAboutSlugProps };
};

export async function generateMetadata({
  params,
}: generateMetadataProps): Promise<Metadata> {
  const post: IAboutSlugProps = await fetchAboutRequest(
    `${API.params.aboutSlug}/${params.slug}`
  );

  return {
    title: post.seo_title,
    description: post.seo_description,
    keywords: post.seo_keywords,
  };
}

const AboutPostPage = async ({ params }: { params: { slug: string } }) => {
  const post: IAboutSlugProps = await fetchAboutRequest(
    `${API.params.aboutSlug}/${params.slug}`
  );

  return (
    <main className={styles.main}>
      <AboutHeaderSlug />
      <AboutMain>
        <AboutMainSlug
          description={post.description}
          title={post.title}
          key={post.id}
        />
      </AboutMain>
      <Footer />
    </main>
  );
};

export default AboutPostPage;
