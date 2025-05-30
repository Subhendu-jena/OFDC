import React, { useEffect, useState } from 'react';
import { Mail, Phone, User, Lock, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/Path';
import {
  changePassword,
  logoutController,
  updateUser,
  userData,
} from '../../config/controller';
import { toast } from 'react-toastify';
import blankImage from '../../assets/blankImage.webp';
import axios from 'axios';
const userProfile: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any>({});
  const [formData, setFormData] = useState({
    name: data?.name ?? '',
    email: data?.email ?? '',
    phoneNo: data?.phoneNo ?? '',
    currentPassword: '',
    profilePic: '',
    newPassword: '',
    confirmPassword: '',
  });
  useEffect(() => {
    userData({})
      .then((response: any) => {
        console.log(response, 'user data');
        if (response) {
          setData(response?.user);
        } else {
          console.warn('User data fetch failed:', response);
        }
      })
      .catch((error: any) => {
        console.error('Error fetching user data:', error);
      });
  }, [formData]);
  const profile = {
    name: data?.name ?? '',
    email: data?.email ?? '',
    phoneNo: data?.phoneNo ?? '',
    role: data?.role ?? '',
    profilePic: data?.profilePic || { blankImage },
  };
  console.log(profile.profilePic, 'profilePic');
  const token = sessionStorage.getItem('token');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
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
        if (response.success) {
        }
      }
    } catch (error: any) {
      // console.error('Error changing password:', error);
      const errorMessage = error.message || 'An error occurred';
      toast.error(errorMessage);
    } finally {
      setIsChangingPassword(false);
    }
  };
  const handleSave = async () => {
    try {
      await updateUser({
        data: {
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phoneNo,
          profilePic: uploadedFiles.profilePic,
        },
        token: token,
      });
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('files', file);

    try {
      setUploading(true);
      const res = await axios.post(
        'http://54.160.82.66:1337/api/upload/',
        formData
      );
      const fileUrl = res.data[0]?.url;
      if (fileUrl) {
        setUploadedFiles((prev: any) => ({
          ...prev,
          [fieldName]: `http://54.160.82.66:1337${fileUrl}`,
        }));
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };
  const handleLogout = async () => {
    try {
      const response = await logoutController({});
      if (response) {
        toast.success(response.message);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userID');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('phoneNo');
        // window.location.reload();
        navigate(paths.login, { replace: true });
      }
    } catch (error) {}
  };
  console.log(uploadedFiles, 'uploadedFiles');
  const navigate = useNavigate();
  return (
    <main className="max-w-screen bg-white mx-auto px-4 sm:px-6 py-8 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={uploadedFiles.profilePic || profile?.profilePic}
                alt="Profile"
                className="w-20 h-20 object-cover rounded-full"
              />

              <label
                htmlFor="fileInput"
                className="absolute bottom-0 right-0 p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors cursor-pointer"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'profilePic')}
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
            {uploading && (
              <div className="text-sm text-red-500">Uploading...</div>
            )}
          </div>
          <div className="flex justify-end">
            {' '}
            <button
              className="w-[20%] h-15 bg-red-600 text-white py-3 px-4 rounded-4xl hover:bg-red-700 transition-colors"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
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
              <div className="flex items-center gap-2 p-3 bg-gray-200 rounded-lg">
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
              <div className="flex items-center gap-2 p-3 bg-gray-200 rounded-lg">
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
              <div className="flex items-center gap-2 p-3 bg-gray-200 rounded-lg">
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
              <div className="p-3 bg-gray-200 rounded-lg text-gray-500">
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
                    <span className="text-red-500 mx-2">*</span>
                    <span className="text-xs text-gray-500">
                      You can't set any old passwords as new password
                    </span>
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
                    className="w-full p-3 bg-gray-200 rounded-lg outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {' '}
                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      New Password<span className="text-red-500 mx-2">*</span>
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
                      className="w-full p-3 bg-gray-200 rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Confirm New Password
                      <span className="text-red-500 mx-2">*</span>
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
                      className="w-full p-3 bg-gray-200 rounded-lg outline-none"
                    />
                  </div>
                  <button
                    className="w-[50%] bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleChangePassword();
                    }}
                  >
                    Change Password
                  </button>
                </div>
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
          {/* <div className="pt-4">
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
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default userProfile;
