"use server";

import connectdb from "@/app/components/connectdb";
import User from "@/app/models/User";
import Follow from "@/app/models/Follow";
import Post from "@/app/models/Post";

export const getOneUser = async (id) => {
  await connectdb();
  const user = await User.findOne({ username: id }).lean();
  const res = JSON.stringify(user);
  return res;
};

export const getAllUser = async () => {
  await connectdb();
  const user = await User.find({}).lean();
  const res = JSON.stringify(user);
  return res;
};

export const getAllUserName = async (id) => {
  await connectdb();
  const users = await User.find({}).lean();
  const usernames = users.map((user) => user.username);
  return JSON.stringify(usernames);
};
export const getFollowingList = async (id) => {
  await connectdb();
  const followRecords = await Follow.find({ user: id }).lean();
  const usernames = followRecords.map((follow) => follow.toUser);
  return JSON.stringify(usernames);
};

export const getFollowers = async (id) => {
  await connectdb();
  const followRecords = await Follow.find({ toUser: id }).lean();
  const usernames = followRecords.map((follow) => follow.user);
  const users = await User.find({ username: { $in: usernames } }).lean();
  return JSON.stringify(users);
};

export const getFollowings = async (id) => {
  await connectdb();
  
  const followRecords = await Follow.find({ user: id }).lean();
  
  const users = await Promise.all(
    followRecords.map(async (follow) => {
      return await User.findOne({ username: follow.toUser }).lean();
    })
  );
  
  return JSON.stringify(users);
};

export const followToUser = async (user, toUser) => {
  await connectdb();
  const followNode = await Follow.findOne({ user:user, toUser: toUser}).lean();
  if (followNode) {
    await Follow.deleteOne({ user:user, toUser: toUser });
  }
  else {
    await Follow.create({ user: user, toUser: toUser });
  }
  return getFollowingList(user);
};

export const getPosts = async function getPosts(id) {
  await connectdb();
  const posts = await Post.find({ user: id }).lean();
  const res = JSON.stringify(posts);
  return res;
};
