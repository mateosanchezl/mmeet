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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(profileData);
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

  const handleAddInterest = (interest) => {
    setProfileData((prevData) => ({
      ...prevData,
      interests: [...prevData.interests, interest],
      new_interest: "",
    }));
  };

  const handleInterestSearch = (e) => {
    const { value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      new_interest: value,
    }));
  };

  const handleInterestSelection = (interest) => {
    if (!profileData.interests.includes(interest)) {
      handleAddInterest(interest);
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        new_interest: "",
      }));
    }
  };

  const filteredInterests = allInterests.filter((interest) =>
    interest.toLowerCase().includes(profileData.new_interest.toLowerCase())
  );

  const handleRemoveInterest = (interest) => {
    setProfileData((prevData) => ({
      ...prevData,
      interests: prevData.interests.filter((item) => item !== interest),
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-700 p-4 pb-36">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Customise Your Profile
          </h1>
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
          </div>
          {profileData.interests.length > 0 && (
            <div className="flex flex-wrap mt-2">
              {profileData.interests.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1"
                >
                  <span>{interest}</span>
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => handleRemoveInterest(interest)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 7.293a1 1 0 011.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {profileData.new_interest && (
              <ul className="absolute z-10 w-full py-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {filteredInterests.map((interest) => (
                  <li
                    key={interest}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleInterestSelection(interest)}
                  >
                    {interest}
                  </li>
                ))}
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-blue-500"
                  onClick={() => handleAddInterest(profileData.new_interest)}
                >
                  Add "{profileData.new_interest}"
                </li>
              </ul>
            )}
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
