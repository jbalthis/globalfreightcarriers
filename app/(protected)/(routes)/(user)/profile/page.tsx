'use client';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session, status } = useSession();
  // Show the user. No loading state is required
  return (
    <>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      <pre>status: {status}</pre>
    </>
  );
};

export default Profile;
