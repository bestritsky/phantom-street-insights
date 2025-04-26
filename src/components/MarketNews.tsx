
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock news data
const marketNews = [
  {
    id: 1,
    title: 'Tesla announces expansion of gigafactory production capacity',
    source: 'Bloomberg',
    time: '35 minutes ago',
    tags: ['TSLA', 'Manufacturing']
  },
  {
    id: 2,
    title: 'Federal Reserve signals potential rate cut in next meeting',
    source: 'CNBC',
    time: '1 hour ago',
    tags: ['Macroeconomics', 'Federal Reserve']
  },
  {
    id: 3,
    title: 'Rivian unveils new electric pickup truck with extended range',
    source: 'Reuters',
    time: '2 hours ago',
    tags: ['RIVN', 'Product Launch']
  },
  {
    id: 4,
    title: 'Oil prices drop as OPEC+ considers increasing production',
    source: 'Wall Street Journal',
    time: '3 hours ago',
    tags: ['Oil & Gas', 'Commodities']
  },
  {
    id: 5,
    title: 'Tech stocks rally following strong earnings from major players',
    source: 'Financial Times',
    time: '4 hours ago',
    tags: ['Technology', 'Earnings']
  }
];

const MarketNews: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle>Latest Market News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketNews.map(news => (
            <div 
              key={news.id}
              className="pb-3 border-b border-gray-800 last:border-0 last:pb-0"
            >
              <div className="flex justify-between items-start text-sm">
                <div className="space-y-1">
                  <h3 className="font-medium text-white">{news.title}</h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{news.source}</span>
                    <span className="mx-2">•</span>
                    <span>{news.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                {news.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketNews;
