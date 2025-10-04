এখানে আমরা দেখব কিভাবে এইচটিএমএল এর সাথে জাভাসকৃপ্ট কে কানেক্ট করা যায়। 
প্রথমত আমরা চাইলে script ট্যাগ use করে js লিখতে পারি 
আর external ফাইল এর মাধ্যমে করতে চাইলে 
<script src="script.js"></script>
body tag এর closing এর উপরে script ট্যাগ এর মাধ্যমে js কে কানেক্ট করা হয়। 

javascript dom এর মাধ্যমে html এর সাথে কানেক্ট করে.dom হলো একটি অবজেক্ট.
dom হলো ওয়েবপেজ এর structure এবং প্রোগ্রামিং interface.
এটি একটি tree structure. এবং প্রতিটি এলিমেন্ট html node হিসাবে থেকে.
js দিয়ে html dom কে পরিবর্তন, modify এবং manipulate করা যায়.

কেন dom দরকার? 
1. html ফাইল ডাইনামিক করতে. 
2. ইউজার ইন্টারফেস হ্যান্ডেল করতে 
3. API থেকে ডাটা লোড করতে 
4. real time feature তৈরি করতে 

dom কি কাজ করে ?
এইচটিএমএল লোড হলে ব্রাউজার তা পড়ে dom tree বানায় 
js দিয়ে তা মোডিফাই করে এবং হ্যান্ডেল করা যায় 
ইউজার ইন্টারঅ্যাকশন হ্যান্ডেল করা 

2 way to handle dom
1. internal script : ছোট কোনও কাজের জন্য 
2. external script: বড় কোনও কাজের জন্য (recommended)