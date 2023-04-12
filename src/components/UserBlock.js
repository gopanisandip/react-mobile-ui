function UserBlock() {
    const user = {
        name: 'John',
        contact: '(88) 99602-2404'
    }

    return (
        <div className="user-details">
            <div className="d-flex left-sec">
                <div className="user-img">
                    {user.name.substring(0, 1)}
                </div>
                <div className="personal-details">
                    <p className="name"> {user.name} </p>
                    <span className="contact-detail"> {user.contact} </span>
                </div>
            </div>
            <button className="cmn-theme-btn">Log out</button>    
        </div>
    );
  }
  
  export default UserBlock;
  