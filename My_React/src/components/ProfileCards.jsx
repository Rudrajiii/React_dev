export const ProfileCards = () => {
  return (
    <div>
      <h1>Profile Cards</h1>
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
  );
};

function ProfileCard(props){
    console.log(props);
    return(
        <>
            <h1>Name : {props.name}</h1>
            <h2>Age : {props.age}</h2>
            <h2>Grettings : {props.greetings}</h2>
            <div>
                {props.children}
            </div>
        </>
    )
}

