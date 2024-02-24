import React, { useState } from "react";

function ProfileCreation() {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: null,
    interests: [],
    new_interest: "",
  });

  // Simulate a list of hobbies/interests
  const allInterests = [
    "Music",
    "Gaming",
    "Coding",
    "Hiking",
    "Reading",
    "Traveling",
    "Cooking",
    "Sports",
  ];

  const toggleInterest = (interest) => {
    setProfileData((prevData) => ({
      ...prevData,
      interests: prevData.interests.includes(interest)
        ? prevData.interests.filter((i) => i !== interest)
        : [...prevData.interests, interest],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // For demonstration purposes only, no actual upload logic
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log(profileData);
  };

  const handleInterestSearch = (e) => {
    handleChange(e);
  }

  const filteredInterests = allInterests.filter((interest) =>
    interest.toLowerCase().includes(profileData.new_interest.toLowerCase())
  );


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300 p-4 pb-36">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={profileData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={profileData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={profileData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="profilePicture"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                onChange={handleProfilePictureChange}
                className="mt-1 block w-full"
              />
              {profileData.profilePicture && (
                <img
                  src={profileData.profilePicture}
                  alt="Profile preview"
                  className="mt-4 w-32 h-32 rounded-full mx-auto"
                />
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Interests
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {allInterests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1 border ${
                      profileData.interests.includes(interest)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } rounded-full focus:outline-none`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              <div>
                <label
                  htmlFor="new_interest"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Interest
                </label>
                <input
                  type="text"
                  name="new_interest"
                  id="new_interest"
                  value={profileData.new_interest}
                  onChange={handleInterestSearch}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {profileData.new_interest && (
              <ul className="absolute z-10 w-full py-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {filteredInterests.map((interest) => (
                  <li
                    key={interest}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setProfileData((prevData) => ({
                        ...prevData,
                        interests: [...prevData.interests, interest],
                        new_interest: "",
                      }));
                    }}
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            )}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfileCreation;
