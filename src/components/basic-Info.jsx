export default function BasicInfo(props) {

    const {info , setInfo} = props; 
    const handleChange = (e) => {
      const {name, value} = e.target;
      setInfo((prev) => ({
          ...prev,
          basic: {
              ...prev.basic,
              [name]: value
          }
      }));
  }
    return (
  <div className="basic-info-form">
    <h2>Basic Information</h2>
    <form >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={info.basic.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={info.basic.email} onChange={handleChange} />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" value={info.basic.phone} onChange={handleChange} />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" value={info.basic.address} onChange={handleChange} />

    </form>
  </div>)
}