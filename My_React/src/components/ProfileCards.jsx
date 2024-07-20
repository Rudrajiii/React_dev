export const ProfileCards = () => {
  return (
    <div className="w-full my-2">
      <h1 className="text-center font-mono">Profile Cards</h1>
      <div className="flex flex-col md:flex-row gap-2 m-4">
        <ProfileCard
          name="John"
          age={18}
          greetings={
            <div>
              <strong>Hello There !! 👀</strong>
            </div>
          }
        >
          <h2>This is a profile Card</h2>
          <h3>Made With Lot's Of Love</h3>
        </ProfileCard>

        <ProfileCard
          name="Johny"
          age={19}
          greetings={
            <div>
              <strong>Hello There !! 👀</strong>
            </div>
          }
        >
          <h2>This is a profile Card</h2>
          <h3>Made With Lot's Of Love</h3>
        </ProfileCard>
      </div>
    </div>
  );
};

function ProfileCard(props){
    console.log(props);
    return(
        <>
          <div className="w-full md:w-2/4 flex flex-col border rounded mb-4 md:mb-0">
              <h1 className="bg-sky-300 p-3 rounded text-center text-gray-800 font-mono">Name : {props.name}</h1>
              <div className="p-3 font-mono">
                <h2>Age : {props.age}</h2>
                <h2 className="flex gap-2">Greetings : {props.greetings}</h2>
                <div>
                    {props.children}
                </div>
              </div>
          </div>
        </>
    )
}


