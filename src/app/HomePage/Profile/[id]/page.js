"use client";
import Posts from "@/app/components/posts";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function ProfilePage({ params }) {
  const [userData, setUserData] = useState();
  
  // Static data for the rank, bio links, and rank progress
  const rankIcons = {
    bronze: '/Default_Design_an_extraordinary_round_and_majestic_gamingrelat_0(1).jpg',
    silver: '/Default_Design_an_extraordinary_round_and_majestic_gamingrelat_0.jpg',
    gold: '/Default_Design_an_extraordinary_round_and_majestic_gamingrelat_3 (1).jpg',
    // Add other ranks as needed
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/${params.id}/data`,{method: 'GET',headers: {'Content-Type': 'application/json',}}
        );
        const data = await response.json();
  
        if (response.ok) {
          setUserData(data);
          console.log(userData);
          
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex-auto w-full">
      <Head>
        <title>Profile</title>
      </Head>
      {/* User Data Section */}
      <div style={{ position: 'relative', padding: '20px' }}>
        <h3>
          Nickname: {userData.nickname}
        </h3>
        {/* Rank progress gauge section */}
        <div className="rank-progress-gauge" style={{ position: 'absolute', top: '200px', left: '100px' }}>
          <h3>Rank Progress</h3>
          <progress value={userData.social.rank.exp} max={userData.social.rank.next_rank} style={{ width: '100%' }}></progress>
        <p>{userData.social.rank.exp}/ {userData.social.rank.next_rank}</p>
        </div>
      </div>
      <Posts keyPost={params.id} />
    </div>
  );
}
