import React, { useState } from 'react';
import { Mail, Phone, User, Lock, Upload } from 'lucide-react';

const profile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  role: 'viewer',
  avatar:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150',
};

const userProfile: React.FC = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = ({event}:any) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to URL
      setImage(imageUrl);
    }
  };
  return (
    <main className="max-w-screen bg-white mx-auto px-4 sm:px-6 py-8 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <div className="relative">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full"
              />
            ) : (
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full"
              />
            )}

            <label
              htmlFor="fileInput"
              className="absolute bottom-0 right-0 p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="fileInput"
              />
              <Upload className="w-4 h-4" />
            </label>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Profile Settings
            </h1>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  defaultValue={profile.name}
                  className="bg-transparent flex-1 outline-none text-gray-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  defaultValue={profile.email}
                  className="bg-transparent flex-1 outline-none text-gray-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  defaultValue={profile.phone}
                  className="bg-transparent flex-1 outline-none text-gray-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <div className="p-3 bg-gray-50 rounded-lg text-gray-500">
                {profile.role}
              </div>
            </div>
          </div>

          {/* Password Change */}
          <div>
            <button
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
            >
              <Lock className="w-4 h-4" />
              <span>Change Password</span>
            </button>

            {isChangingPassword && (
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="current-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="w-full p-3 bg-gray-50 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="w-full p-3 bg-gray-50 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full p-3 bg-gray-50 rounded-lg outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default userProfile;
