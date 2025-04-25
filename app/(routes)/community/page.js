import {
  MessageSquare,
  Heart,
  Clock,
  ArrowRight,
  Bell,
  Users,
  Eye,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { discussionThreads } from "@/data/discussions";

export default function CommunityPage() {
  // Mock discussion threads data
  
  const discussionThreadAdj = discussionThreads.map(thread => {
    // Get a random index
    const imagePaths = [
      "/images/avatars/avatar1.jpg",
      "/images/avatars/avatar-male.jpg",
      "/images/avatars/avatar2.jpg",
      "/images/avatars/avatar3.jpg",
      "/images/avatars/avatar-male-3.jpg",
      "/images/avatars/avatar4.jpg",
      "/images/avatars/avatar-male-2.jpg",
      "/images/avatars/avatar5.jpg",
      "/images/avatars/avatar-male-1.jpg",
      "/images/avatars/avatar-male-4.jpg",
    ]
    
    return {
      ...thread,
      author:{
        ...thread.author,
        avatar: imagePaths[thread.id-1],
      }
    };
  });

  // Mock trending topics
  const trendingTopics = [
    "Summer fragrances 2025",
    "Niche vs. Designer debate",
    "Middle Eastern perfumery",
    "Vanilla-based scents",
    "Fragrance storage solutions",
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-3xl md:text-4xl text-midnight mb-4">
          Fragrance Community
        </h1>
        <p className="font-montserrat text-midnight/70 max-w-2xl mx-auto">
          Join fellow fragrance enthusiasts to discuss scents, share
          recommendations, and explore the world of perfumery together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main discussion area */}
        <div className="md:col-span-2">
          {/* Discussion threads */}
          <div className="space-y-6">
            {discussionThreadAdj.map((thread) => (
              <div
                key={thread.id}
                className="bg-white border-amber/50 border-[1px] group rounded-lg shadow-sm overflow-hidden"
              >
                {/* Thread header */}
                <div className="bg-cream p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={thread.author.avatar}
                      alt={thread.author.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <span className="text-sm text-midnight font-medium">
                        {thread.author.name}
                      </span>
                      <div className="flex items-center text-xs text-midnight/60">
                        <Clock size={12} className="mr-1" />
                        {thread.timeAgo}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-midnight/5 text-midnight/70 rounded-full">
                    {thread.category}
                  </span>
                </div>

                {/* Thread content */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-montserrat text-lg text-midnight mb-2 hover:text-amber transition-colors">
                      <Link href="#">{thread.title}</Link>
                    </h3>
                    {thread.isPopular && (
                      <span className="ml-2 text-xs bg-amber text-midnight px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-midnight/70 text-sm mb-4 line-clamp-3">
                    {thread.excerpt}
                  </p>

                  {/* Thread stats & actions */}
                  <div className="flex justify-between items-center pt-3 border-t border-midnight/10">
                    <div className="flex space-x-4">
                      <div className="flex items-center text-sm text-midnight/60">
                        <MessageSquare size={16} className="mr-1" />
                        {thread.replies} replies
                      </div>
                      <div className="flex items-center text-sm text-midnight/60">
                        <Heart size={16} className="mr-1" />
                        {thread.likes} likes
                      </div>
                      <div className="flex items-center text-sm text-midnight/60">
                        <Eye size={16} className="mr-1" />
                        {thread.views} views
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="text-amber hover:text-amber-light transition-colors text-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse more button */}
          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center text-amber hover:text-amber-light transition-colors font-medium"
            >
              Browse all discussions
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 md:sticky top-12">
          {/* CTA Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Users size={32} className="text-amber mb-3" />
              <h3 className="font-montserrat text-xl text-midnight mb-2">
                Join the Conversation
              </h3>
              <p className="text-sm text-midnight/70 mb-4">
                Share your passion for fragrances and connect with our global
                community of perfume enthusiasts.
              </p>
              <Link
                href="#"
                className="w-full bg-amber hover:bg-amber-light text-midnight font-montserrat font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Create an Account
              </Link>
              <Link
                href="#"
                className="text-midnight/70 hover:text-midnight text-sm mt-3"
              >
                Already a member? Sign in
              </Link>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-montserrat text-lg text-midnight mb-4">
              Trending Topics
            </h3>
            <ul className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="flex items-center text-sm text-midnight hover:text-amber transition-colors"
                  >
                    <span className="inline-block w-1 h-1 bg-amber rounded-full mr-2"></span>
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Stats */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-montserrat text-lg text-midnight mb-4">
              Community Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-montserrat text-2xl text-midnight">5.2K</div>
                <div className="text-xs text-midnight/70">Members</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-montserrat text-2xl text-midnight">314</div>
                <div className="text-xs text-midnight/70">Active Now</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-montserrat text-2xl text-midnight">824</div>
                <div className="text-xs text-midnight/70">Topics</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-montserrat text-2xl text-midnight">
                  12.7K
                </div>
                <div className="text-xs text-midnight/70">Posts</div>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="bg-cream rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Bell size={24} className="text-amber mt-1" />
              <div>
                <h3 className="font-montserrat font-medium text-midnight mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm text-midnight/70 mb-3">
                  Subscribe to our newsletter for community highlights and
                  fragrance discussions.
                </p>
                <Link
                  href="#"
                  className="text-sm text-amber hover:text-amber-light transition-colors font-medium"
                >
                  Subscribe →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
