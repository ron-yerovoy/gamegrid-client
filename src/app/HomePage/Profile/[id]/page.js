import Posts from "@/app/components/posts";
import Head from "next/head";

export default function ProfilePage({params}) {
    return (
        <div className="min-h-screen flex-auto w-full  ">
        <Head>
          <title>Profile</title>
        </Head>
        <Posts keyPost={params.id} />
      </div>
    )
}