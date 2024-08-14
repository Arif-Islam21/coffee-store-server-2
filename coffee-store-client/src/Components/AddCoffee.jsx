const AddCoffee = () => {
  return (
    <div>
      <h2>Add Coffee</h2>
      <form>
        <div className="flex justify-around">
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Coffee name?</span>
            </div>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Coffee Quantity?</span>
            </div>
            <input
              type="number"
              placeholder="Coffee Quantity"
              className="input input-bordered w-full max-w-lg"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
