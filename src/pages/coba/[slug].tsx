// import { getServerSideProps } from "../tes";

type BlogPageProps = {
    params: {
      slug: string;
    };
  };
  
  export default async function BlogPage(props) {
    console.log("asdhbf", props.slug)
    return (
        
        <h1>laf</h1>
    );
  }

  export async function getServerSideProps(context){
    return {
        props: {
            slug: context.params.slug
        }
    }
  }