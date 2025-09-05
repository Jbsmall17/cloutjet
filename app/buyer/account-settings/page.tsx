"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, User, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Loader from "@/components/ui/Loader";

type FormInput = {
  fullname: string;
  email: string;
  gender: "female" | "male";
  dob: string;
  pnumber: string;
  country: string;
  state: string;
  city: string;
  profile: File | null;
};

type passwordType = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

type deleteType = {
    isChecked: boolean;
}

export default function Page() {
  const [isCPassword, setIsCPassword] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [picture, setPicture] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { control, handleSubmit, setValue, watch } = useForm<FormInput>({
    defaultValues: {
      fullname: "",
      email: "",
      gender: "male",
      dob: "",
      pnumber: "",
      country: "",
      state: "",
      city: "",
      profile: null,
    },
  });
  const { control: passwordControl, handleSubmit: passwordHandleSubmit, watch: passwordWatch, formState: { errors } } = useForm<passwordType>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const { control: deleteControl, handleSubmit: deleteHandleSubmit, formState: { errors: deleteErrors } } = useForm<deleteType>({
    defaultValues: {
      isChecked: false,
    }
  });
  const profile = watch("profile");
  const newPassword = passwordWatch("newPassword");

  const onDeleteSubmit: SubmitHandler<deleteType> = () => {
    const endpoint = "https://cloud-jet-production.up.railway.app/v1/user/delete-account"
    setDeleteLoading(true)
    axios.post(endpoint, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      toast.success(res.data.message || "Account deleted successfully");
    })
    .catch((error) => {
      toast.error(error.response.data.message || "Failed to delete account");
    })
    .finally(() => {
      setDeleteLoading(false);
    })
  }

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const endpoint =
      "https://cloud-jet-production.up.railway.app/v1/auth/profile/update";
    const formData = new FormData();
    formData.append("fullName", data.fullname);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("dateOfBirth", data.dob);
    formData.append("pnumber", data.pnumber);
    formData.append("country", data.country);
    formData.append("state", data.state);
    formData.append("city", data.city);
    if (data.profile) {
      formData.append("profileImage", data.profile);
    }
    setLoading(true);
    axios
      .post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message || "Profile updated successfully");
      })
      .catch((error) => {
        toast.error(error.response.data.message || "Failed to update profile");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onPasswordSubmit: SubmitHandler<passwordType> = (data) => {
    const endpoint = "https://cloud-jet-production.up.railway.app/v1/user/change-password"
    // console.log(data)
    const payLoad = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
    }
    setPasswordLoading(true);
    axios.post(endpoint, payLoad, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        toast.success(res.data.message || "Password changed successfully");
    })
    .catch((error) => {
        toast.error(error.response.data.message || "Failed to change password");
    })
    .finally(()=>{
        setPasswordLoading(false);
    })
}

  const handleFileInputClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setValue("profile", file);
    setPicture("");
  };

  const getUserInfo = () => {
    const endpoint =
      "https://cloud-jet-production.up.railway.app/v1/auth/profile/retrieve";
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const userData = res.data.data;
        setValue("fullname", userData.fullName);
        setValue("email", userData.email);
        setValue("pnumber", userData.phoneNumber);
        setValue("dob", userData.dateOfBirth);
        setValue("country", userData.country);
        setValue("state", userData.state);
        setValue("city", userData.city);
        setPicture(userData.profileImage);
      })
      .catch(() => {
        console.log("Error fetching user information");
      });
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]);

  return (
    <section className="flex flex-col">
      <Toaster />
      <h1 className="text-center font-semibold mb-3 text-2xl">
        Account Setting
      </h1>
      <div className="bg-white">
        <p className="bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold">
          Basic Information
        </p>
        <div className="p-4 md:p-6">
          <div className="mb-4 flex flex-row items-center gap-3">
            <Input
              type="file"
              id="profilePhoto"
              accept="image/*"
              className="hidden"
              ref={inputRef}
              onChange={handleFileChange}
            />
            <div
              onClick={handleFileInputClick}
              className="relative flex justify-center items-center rounded-full size-18 border border-gray-300"
            >
              {profile && picture == "" ? (
                <Image
                  src={URL.createObjectURL(profile)}
                  alt="Profile Photo"
                  className="rounded-full h-18 h-18 object-cover"
                  width={72}
                  height={72}
                />
              ) : picture !== "" ? (
                <Image
                  src={picture}
                  alt="Profile Photo"
                  className="rounded-full h-18 h-18 object-cover"
                  width={72}
                  height={72}
                />
              ) : (
                <User />
              )}
              <div className="text-white flex justify-center items-center absolute bottom-0 right-0 bg-[#f6a21b] size-7 rounded-full">
                <Pencil className="size-4 fill-current" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold">Profile photo</p>
              <p className="text-base">
                This will be displayed on your profile
              </p>
            </div>
            <div></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      id="fullname"
                      placeholder="fullname"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="email"
                      id="email"
                      placeholder="yourmail@example.com"
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Controller
                  name="dob"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="date"
                      id="dob"
                      placeholder="Date of Birth"
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pnumber">Phone Number</Label>
                <Controller
                  name="pnumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      id="pnumber"
                      placeholder="+2348061403147"
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country of Residence</Label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      id="country"
                      placeholder="country"
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      id="state"
                      placeholder="state"
                    />
                  )}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      id="city"
                      placeholder="city"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="min-w-[96px] cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white"
              >
                {!loading ? "Update" : <Loader />}
              </Button>
            </div>
          </form>
        </div>
        <p className="bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold">
          Notifications
        </p>
        <div className="px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row divide-y-2 md:divide-x-2 ">
          <div className="flex-1 pr-4 md:pr-6 pb-3 md:pb-0 pb-3 space-y-3">
            <div className="space-y-2">
              <p className="text-xl font-semibold">Email Notifications</p>
              <p className="text-base text-[#808080]">
                Get emails to find out what&apos;s going onm when you are not
                onlin. You can turn these off
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Switch />
              <div className="space-y-1">
                <p className="text-base leading-none font-semibold">News</p>
                <p className="text-[#808080]">
                  News about products and future updates
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Switch />
              <div className="space-y-1">
                <p className="text-base leading-none font-semibold">Updates</p>
                <p className="text-[#808080]">feature updates</p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Switch />
              <div className="space-y-1">
                <p className="text-base leading-none font-semibold">
                  Reminders
                </p>
                <p className="text-[#808080]">
                  These are notifications to remind you of updates you migth
                  have missed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 pl-4 md:pl-6 pt-3 md:pt-0 space-y-3">
            <div className="space-y-2">
              <p className="text-xl font-semibold">Push Notifications</p>
              <p className="text-base text-[#808080]">
                Get push notifications in app to find out what&apos;s going on
                when you are not online. You can turn these off
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Switch />
              <div className="space-y-1">
                <p className="text-base leading-none font-semibold">
                  Reminders
                </p>
                <p className="text-[#808080]">
                  These are notifications to remind you of updates you migth
                  have missed.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Switch />
              <div>
                <p className="text-base leading-none font-semibold">Update</p>
                <p className="text-[#808080]">feature update.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 md:p-6">
          <Button className="cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white">
            Update
          </Button>
        </div>
        <p className="bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold">
          Password & Security
        </p>
        <form onSubmit={passwordHandleSubmit(onPasswordSubmit)}>
        <div className="px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="relative">
            <Controller
              control={passwordControl}
              name="currentPassword"
              rules={{ 
                required: "Current password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                }
            }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isCPassword ? "text" : "password"}
                  id="currentPassword"
                  placeholder="Enter Current Password"
                  className={`w-full border ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              } `}
                />
              )}
            />
            {isCPassword ? (
              <EyeOff
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsCPassword(!isCPassword);
                }}
              />
            ) : (
              <Eye
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsCPassword(!isCPassword);
                }}
              />
            )}
          </div>
          <div className="relative">
            <Controller
                name="newPassword"
                control={passwordControl}
                rules={{ 
                    required: "New password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    }
                }}
                render={({field})=>(
                    <Input
                        {...field}
                        type={isNewPassword ? "text" : "password"}
                        id="newPassword"
                        placeholder="Enter new Password"
                        className={`w-full border ${
                          errors.newPassword ? "border-red-500" : "border-gray-300"
                        } `}
                    />
                )}
            />
            {isNewPassword ? (
              <EyeOff
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsNewPassword(!isNewPassword);
                }}
              />
            ) : (
              <Eye
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsNewPassword(!isNewPassword);
                }}
              />
            )}
          </div>
          <div className="relative">
            <Controller
              name="confirmPassword"
              control={passwordControl}
              rules={{ 
                required: "Confirm password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                },
                validate: (value) => value === newPassword || "Passwords do not match"
                }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={isConfirmPassword ? "text" : "password"}
                  id="confirmNewPassword"
                  placeholder="Confirm New Password"
                  className={`w-full border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } `}
                />
              )}
            />
            {isConfirmPassword ? (
              <EyeOff
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsConfirmPassword(!isConfirmPassword);
                }}
              />
            ) : (
              <Eye
                className="absolute right-4 top-[50%] -translate-y-[50%]"
                onClick={() => {
                  setIsConfirmPassword(!isConfirmPassword);
                }}
              />
            )}
          </div>
        </div>
        <div className="flex justify-end p-4 md:p-6">
          <Button className="min-w-[96px] cursor-pointer rounded-xs px-6 bg-[#f6a21b] hover:bg-[#17233b] text-white">
            {
                passwordLoading ? <Loader /> : "Update"
            }
          </Button>
        </div>
        </form>
        <p className="bg-[#17233b] leading-none text-white py-4 pl-4 md:pl-6 font-semibold">
          Delete your accouunt
        </p>
        <div className="px-4 md:px-6 py-6 md:py-8 space-y-3">
          <p>
            when you delete your account, you lose access to cloutjet account
            services, and we permanently delete your personal data. You can
            cancel the deletion for 14 days
          </p>
          <form onSubmit={deleteHandleSubmit(onDeleteSubmit)}>
          <div className="mb-6 md:mb-8 flex items-center">
            <Controller
                name="isChecked"
                control={deleteControl}
                rules={{ required: "You must confirm account deletion" }}
                render={({ field }) => (
                    <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        name={field.name}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        className={`mr-3 size-5 ${deleteErrors.isChecked ? "border-red-500" : "border-gray-300"}`}
                    />
                )}
            />
            <span>Confirm that i want to delete my account</span>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="min-w-[96px] cursor-pointer rounded-xs px-6 bg-red-600 hover:bg-[#17233b] text-white">
              {
                deleteLoading ? <Loader /> : "Delete"
              }
            </Button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
