import { useQuery } from "@tanstack/react-query";
import { getAssets } from "@/services/api";
import { AssetCard } from "@/components/AssetCard";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [search, setSearch] = useState("");
  const { data: assets, isLoading, error } = useQuery({
    queryKey: ["assets"],
    queryFn: () => getAssets(),
  });

  // Safe filtering that handles null or undefined assets
  const filteredAssets = assets?.filter(
    (asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(search.toLowerCase())
  ) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E8EFE6] to-[#D4C9B9] dark:bg-[#1A1F2C]">
        <Navbar />
        <div className="container py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6E59A5] to-[#7E69AB] dark:from-[#1EAEDB] dark:to-[#0EA5E9] bg-clip-text text-transparent">
              Trade Crypto with Confidence
            </h1>
            <div className="h-8 mb-8 w-3/4 mx-auto">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="neo-brutal-card h-14 w-48 mx-auto">
              <Skeleton className="h-full w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="neo-brutal-card p-6 bg-white/90 border-[#6E59A5] dark:bg-[#221F26] dark:border-[#403E43] backdrop-blur-lg">
                <Skeleton className="w-12 h-12 mb-4 rounded-full" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl font-bold text-center text-[#333333] dark:text-[#F1F0FB]">Available Assets</h2>
              <Skeleton className="h-12 max-w-md w-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="neo-brutal-card p-6 bg-white/90">
                  <Skeleton className="h-6 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-8 w-full mb-2" />
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E8EFE6] to-[#D4C9B9] dark:bg-[#1A1F2C]">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-73px)]">
          <div className="neo-brutal-card p-6 mx-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-500">
            <p className="text-xl font-bold text-red-600 dark:text-red-400">
              Error loading assets. Please try again later.
            </p>
            {error instanceof Error && (
              <p className="mt-2 text-sm text-red-500 dark:text-red-300">
                {error.message}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8EFE6] to-[#D4C9B9] dark:bg-[#1A1F2C]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6E59A5] to-[#7E69AB] dark:from-[#1EAEDB] dark:to-[#0EA5E9] bg-clip-text text-transparent">
            Trade Crypto with Confidence
          </h1>
          <p className="text-lg md:text-xl text-[#555555] dark:text-[#8E9196] mb-8">
            Access real-time cryptocurrency data and market insights to make informed trading decisions
          </p>
          <Link
            to="/high-potential"
            className="inline-flex items-center space-x-2 neo-brutal-card px-8 py-4 text-lg font-bold text-white bg-[#6E59A5] hover:bg-[#7E69AB] dark:bg-[#1EAEDB] dark:hover:bg-[#0FA0CE] transition-colors"
          >
            <span>Explore Top Performers</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="neo-brutal-card p-6 bg-white/90 border-[#6E59A5] dark:bg-[#221F26] dark:border-[#403E43] backdrop-blur-lg">
            <TrendingUp className="w-12 h-12 text-[#6E59A5] dark:text-[#1EAEDB] mb-4" />
            <h3 className="text-xl font-bold text-[#333333] dark:text-[#F1F0FB] mb-2">Real-Time Data</h3>
            <p className="text-[#555555] dark:text-[#8E9196]">
              Access live cryptocurrency prices and market data for informed trading decisions
            </p>
          </div>
          <div className="neo-brutal-card p-6 bg-white/90 border-[#6E59A5] dark:bg-[#221F26] dark:border-[#403E43] backdrop-blur-lg">
            <Shield className="w-12 h-12 text-[#6E59A5] dark:text-[#1EAEDB] mb-4" />
            <h3 className="text-xl font-bold text-[#333333] dark:text-[#F1F0FB] mb-2">Secure Trading</h3>
            <p className="text-[#555555] dark:text-[#8E9196]">
              Trade with confidence using our secure and reliable platform
            </p>
          </div>
          <div className="neo-brutal-card p-6 bg-white/90 border-[#6E59A5] dark:bg-[#221F26] dark:border-[#403E43] backdrop-blur-lg">
            <Zap className="w-12 h-12 text-[#6E59A5] dark:text-[#1EAEDB] mb-4" />
            <h3 className="text-xl font-bold text-[#333333] dark:text-[#F1F0FB] mb-2">Market Insights</h3>
            <p className="text-[#555555] dark:text-[#8E9196]">
              Get valuable insights and analytics to optimize your trading strategy
            </p>
          </div>
        </div>

        {/* Assets Section */}
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold text-center text-[#333333] dark:text-[#F1F0FB]">Available Assets</h2>
            <Input
              type="search"
              placeholder="Search assets..."
              className="neo-brutal-card max-w-md w-full bg-white/90 border-[#6E59A5] dark:bg-[#221F26] dark:border-[#403E43] text-[#333333] dark:text-[#F1F0FB] placeholder-[#666666] dark:placeholder-[#8A898C]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-[#555555] dark:text-[#8E9196]">
                  {search ? "No assets match your search" : "No assets available. Please try again later."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
