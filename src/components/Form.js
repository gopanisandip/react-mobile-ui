function Form() {
    return (
        <form>
            <div className="input-group">
                <label htmlFor="location">Enter Your Location</label>
                <input type="text" id="location" placeholder="Enter Address" />
            </div>
            <div className="input-group">
                <label htmlFor="note">Note (optional)</label>
                <input type="text" id="note" placeholder="Enter text here" />
            </div>
          
      </form>
    );
  }
  
  export default Form;
  