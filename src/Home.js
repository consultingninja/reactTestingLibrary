import React,{ useState} from 'react'

function Home() {
  const [form,setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [message,setMessage] = useState('')


  const handleSubmit = () =>{
    setMessage("success");
    return setTimeout(()=>{
      setMessage('');
    },2000)
  }

  const specials = ['!','@','#','$','%','^','&','*','(',')'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  const noNumOrSpecials = value => (specials.includes(value) || numbers.includes(value))? true : false;

  const handleChange = (e)=>{
    if(e.target.name === 'name'){
      if(noNumOrSpecials(e.target.value))return
    }
    setForm(prev => ({...prev,[e.target.name]:e.target.value}));
  }

  return (
    <div className='home'>Home
    <form aria-label='user-form'>
      <label>Name:</label>
      <input type="text" value={form.name} aria-label='name' name="name" onChange={(e) => handleChange(e)}/>
      <br />
      <label>Email:</label>
      <input type="email" value={form.email} aria-label='email' name="email" onChange={(e) => handleChange(e)}/>
      <br />
      <label>Phone:</label>
      <input type="number" value={form.phone} aria-label='phone' name="phone" onChange={(e) => handleChange(e)}/>
      <br />
      <input type="button" value="submit" onClick={(e)=> handleSubmit()}/>
      <br />
      <p>{message}</p>
    </form>
    
    
    </div>
  )
}

export default Home