import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-20 px-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card mb-5 border text-left p-5 col-span-1">
          <strong>
            How will you improve the performance of a React Application?
          </strong>
          <p>
            একটি রিয়েক্ট অ্যাপ অপ্টিমাইজ করার অনেক উপায় আছে এর মধ্যে কয়েকটি নিচে
            তুলে ধরা হলো : <br />
            <br />
            ১। কম্পোনেন্ট স্টেট লোকাল রাখা যেখানে প্রয়োজন <br />
            ২। অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করা <br />
            ৩। রিয়েক্টে ডায়নামিক ইম্পোরট করে কোড স্প্লিট করা <br />
            ৪। রিয়েক্টে উইন্ডো করা বা তালিকা ভার্চুয়ালাইজেশন করা <br />
            ৫। Lazy-Loading ইমেজ
          </p>
        </div>
        <div className="card mb-5 border text-left p-5 col-span-1">
          <strong>
            What are the different ways to manage a state in a React
            application?
          </strong>
          <p>
            একটি রিয়েক্ট অ্যাপে বিভিন্ন পদ্ধতিতে স্টেট ম্যানেজ করা যায় এর মধ্যে
            কয়েকটি নিচে তুলে ধরা হলো : <br /> <br />
            ১। লোকাল স্টেট
            <br />
            লোকাল স্টেট হলো ডেটা যা আমরা এক বা অন্য উপাদানে ম্যানেজ করি।
            <br />
            লোকাল স্টেট প্রায়শই useState হুক ব্যবহার করে ম্যানেজ করা হয়।
            <br /> <br />
            ২। গ্লোবাল স্টেট <br />
            গ্লোবাল স্টেট হল ডেটা যা আমরা একাধিক উপাদান ম্যানেজ করি। <br />
            আমরা যখন আমাদের অ্যাপের যেকোনো জায়গায় বা অন্তত একাধিক উপাদানে ডেটা
            পেতে এবং আপডেট করতে চাই তখন গ্লোবাল স্টেট প্রয়োজনীয়। <br />
            ৩। সার্ভার স্টেট <br />
            ডেটা যা একটি বাহ্যিক সার্ভার থেকে আসে যা অবশ্যই আমাদের UI স্টেটের
            সাথে ইন্ট্রিগ্রেট করতে হবে৷ br ৪। URL স্টেট <br />
            Pathname এবং Query প্যারামিটার সহ আমাদের URL-এ বিদ্যমান ডেটা। <br />
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="card mb-5 border text-left p-5 col-span-1">
          <strong>
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </strong>
          <p>
            প্রথমে একটা ফর্ম নিতে হবে। ফর্ম এ একটা ইনপুট ফিল্ড থাকবে ইনপুট
            ফিল্ডের একটা নাম থাকবে। তারপর ফর্ম এ onSubmit প্রোপার্টি দিয়ে
            প্রোপারটির ভ্যালু একটা ফাংশন দিতে হবে। পরের কাজ গুলো হবে ফাংশনে।
            ফাংশনের একটা প্যারামিটার দিতে হবে e তারপর ফাংশনের ভিতর দিতে হবে
            e.preventDefault()। তার পর আমাদের ইনপুট ফিল্ড এর ভ্যালু টা ধরতে হবে
            এভাবে const searchValue = e.target.search.value.toLowerCase() তারপর
            আমাদের কে Products অ্যারে তে ফিল্টার করতে হবে products.filter(p =>
            p.name.toLowerCase().includes(searchValue)) তাহলেই আমরা আমাদের
            প্রোডাক্ট গুলো পাবো।
          </p>
        </div>
        <div className="card mb-5 border text-left p-5 col-span-1">
          <strong>How does prototypical inheritance work?</strong>
          <p>
            সহজ কথায়, প্রোটোটাইপিকাল উত্তরাধিকার অন্য বস্তু থেকে বস্তুর
            বৈশিষ্ট্য অ্যাক্সেস করার ক্ষমতা বোঝায়। বিদ্যমান অবজেক্ট
            কনস্ট্রাক্টরে নতুন বৈশিষ্ট্য এবং পদ্ধতি যোগ করতে আমরা একটি
            জাভাস্ক্রিপ্ট প্রোটোটাইপ ব্যবহার করি। আমরা তখন মূলত আমাদের JS কোডকে
            একটি প্রোটোটাইপ থেকে সম্পত্তির উত্তরাধিকারী হতে বলতে পারি।
            প্রোটোটাইপিকাল ইনহেরিটেন্স আমাদেরকে একটি রেফারেন্স পয়েন্টার ফাংশনের
            মাধ্যমে একটি জাভাস্ক্রিপ্ট অবজেক্ট থেকে অন্যটিতে বৈশিষ্ট্য বা
            পদ্ধতিগুলিকে পুনরায় ব্যবহার করতে দেয়।
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="card mb-5 border text-left p-5 col-span-1">
          <strong>What is a unit test? Why should write unit tests?</strong>
          <p>
            Unit test সাধারণত স্বয়ংক্রিয় পরীক্ষাগুলি লিখিত এবং সফ্টওয়্যার
            বিকাশকারীদের দ্বারা চালিত হয় তা নিশ্চিত করার জন্য যে একটি
            অ্যাপ্লিকেশনের একটি অংশ ("ইউনিট" নামে পরিচিত) এর নকশা পূরণ করে এবং
            উদ্দেশ্য অনুসারে আচরণ করে। পদ্ধতিগত প্রোগ্রামিংয়ে, একটি ইউনিট একটি
            সম্পূর্ণ মডিউল হতে পারে, তবে এটি সাধারণত একটি পৃথক ফাংশন বা পদ্ধতি।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
