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

export default function CommunityPage() {
  // Mock discussion threads data
  const discussionThreads = [
    {
      id: 1,
      title: "What's everyone's favorite oud fragrance?",
      author: {
        name: "Sarah_M",
        avatar: "/api/placeholder/40/40",
      },
      excerpt:
        "Recently I've been exploring different oud fragrances and would love recommendations! I enjoy complex, woody scents with a bit of sweetness. So far I've tried Tom Ford's Oud Wood and Maison Francis Kurkdjian's Oud Satin Mood...",
      category: "Fragrance Recommendations",
      replies: 24,
      likes: 18,
      views: 132,
      timeAgo: "2 hours ago",
      isPopular: true,
    },
    {
      id: 2,
      title: "Longevity issues with summer scents - any tips?",
      author: {
        name: "FragranceLover",
        avatar: "/api/placeholder/40/40",
      },
      excerpt:
        "With summer approaching, I'm struggling with my citrus scents fading within 2-3 hours. Has anyone found effective ways to extend the longevity of lighter fragrances? I've tried applying to moisturized skin and using the matching body lotion...",
      category: "Tips & Techniques",
      replies: 19,
      likes: 14,
      views: 87,
      timeAgo: "1 day ago",
      isPopular: false,
    },
    {
      id: 3,
      title: "New fragrance haul review - Spring 2025 niche releases",
      author: {
        name: "AromaCritic",
        avatar: "/api/placeholder/40/40",
      },
      excerpt:
        "Just received my spring haul and wanted to share my first impressions! The collection includes three new niche releases that haven't been widely reviewed yet. First up is 'Azure Dreams' by Parfums de Marly which features...",
      category: "Reviews",
      replies: 9,
      likes: 31,
      views: 203,
      timeAgo: "3 days ago",
      isPopular: true,
    },
  ];

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
        <h1 className="font-playfair text-3xl md:text-4xl text-midnight mb-4">
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
            {discussionThreads.map((thread) => (
              <div
                key={thread.id}
                className="bg-white border-amber/50 border-[1px] rounded-lg shadow-sm overflow-hidden"
              >
                {/* Thread header */}
                <div className="bg-cream p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={thread.author.avatar}
                      alt={thread.author.name}
                      width={40}
                      height={40}
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
                    <h3 className="font-playfair text-lg text-midnight mb-2 hover:text-amber transition-colors">
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
        <div className="space-y-6">
          {/* CTA Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Users size={32} className="text-amber mb-3" />
              <h3 className="font-playfair text-xl text-midnight mb-2">
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
            <h3 className="font-playfair text-lg text-midnight mb-4">
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
            <h3 className="font-playfair text-lg text-midnight mb-4">
              Community Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-playfair text-2xl text-midnight">5.2K</div>
                <div className="text-xs text-midnight/70">Members</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-playfair text-2xl text-midnight">314</div>
                <div className="text-xs text-midnight/70">Active Now</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-playfair text-2xl text-midnight">824</div>
                <div className="text-xs text-midnight/70">Topics</div>
              </div>
              <div className="text-center p-3 bg-cream rounded-md">
                <div className="font-playfair text-2xl text-midnight">
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
