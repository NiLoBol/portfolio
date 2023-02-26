import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const img = new Image();
    img.src = image;
    let width = null;
    let height = null;
    let classset = null;
    img.onload = () => {
      width = img.width;
      height = img.height;
      console.log(width);
      console.log(height);
      if (width >= height) {
        classset = "h-100";
      } else {
        classset = "w-100";
      }
      console.log(classset);
      setResults([...results, { name, phone, image, classset }]);
    };
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          ชื่อ:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          เบอร์โทร:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          ภาพ:
          <input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <br />
        <button type="submit">ส่งข้อมูล</button>
      </form>
      {results.map((result, index) => (
        <div className="w-25" key={index}>
          <div className="pig1 wh200 O-pigture justify-content m-auto">
            <img
              className={result.classset}
              src={result.image}
              alt="user-image"
            />
          </div>

          <h1 className="text-center ">{result.name}</h1>
          <h3 className="text-center">{result.phone}</h3>
        </div>
      ))}
    </>
  );
}

export default Profile;
