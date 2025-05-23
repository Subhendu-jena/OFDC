import React, { useState } from 'react';
import { Mail, Phone, User, Lock, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
import { changePassword, updateUser } from '../../config/controller';
import { toast } from 'react-toastify';

const userProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: sessionStorage.getItem('name') ?? '',
    email: sessionStorage.getItem('email') ?? '',
    phoneNo: sessionStorage.getItem('phoneNo') ?? '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const profile = {
    name: sessionStorage.getItem('name') ?? '',
    email: sessionStorage.getItem('email') ?? '',
    phoneNo: sessionStorage.getItem('phoneNo') ?? '',
    role: sessionStorage.getItem('role'),
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150',
  };
  const token = sessionStorage.getItem('token');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [image, setImage] = useState<string>();

  const handleImageChange = ({ event }: any) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to URL
      setImage(imageUrl);
    }
  };
  const handleChangePassword = async () => {
    try {
       if (formData.newPassword !== formData.confirmPassword) {
          toast.error('New password and confirm password do not match.');
          return;
        }
      const response = await changePassword({
        token: token,
        data: {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
      });
      if (response.success) {
        toast.success('Password changed successfully.');
        // if (formData.newPassword !== formData.confirmPassword) {
        //   toast.error('New password and confirm password do not match.');
        //   return;
        // }
        // await updateUser({
        //   data: {
        //   },
        //   token: token,
        // });
        if (response.success) {
        }
      }
    } catch (error:any) {
      console.error('Error changing password:', error);
      toast.error(error.response.data.message);
    }
  };
  const handleSave = async () => {
    try {
      const response = await updateUser({
        data: {
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phoneNo,
        },
        token: token,
      });
      if (response.success) {
        toast.success('Profile updated successfully.');
        sessionStorage.setItem('userID', response?.user?._id);
        sessionStorage.setItem('role', response?.user?.role);
        sessionStorage.setItem('name', response?.user?.name);
        sessionStorage.setItem('email', response?.user?.email);
        sessionStorage.setItem('phoneNo', response?.user?.phoneNo);
      }
      console.log(token, 'userPfofile');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const navigate = useNavigate();
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
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  defaultValue={profile.phoneNo}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNo: e.target.value })
                  }
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
                    type="currentPassword"
                    id="current-password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentPassword: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        newPassword: e.target.value,
                      })
                    }
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-50 rounded-lg outline-none"
                  />
                </div>
                <button
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChangePassword();
                  }}
                >
                  Change Password
                </button>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              Save Changes
            </button>
          </div>
          <div className="pt-4">
            <button
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('userID');
                sessionStorage.removeItem('role');
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                sessionStorage.removeItem('phoneNo');
                // window.location.reload();
                navigate(paths.login, { replace: true });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default userProfile;
