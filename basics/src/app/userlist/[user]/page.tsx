const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  console.log(params)
  console.log('...---->>>')
  console.log(user);

  return (
    <div>
      <h1>Info About {user}</h1>
      <p>Hello I&apos;m {user}</p>
    </div>
  );
};

export default User;