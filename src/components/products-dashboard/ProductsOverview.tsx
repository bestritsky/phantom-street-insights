
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowDown, ArrowUp, Package } from 'lucide-react';

// Mock data for product overview
const productData = [
  { 
    id: 1, 
    name: "Premium Smart Device", 
    category: "Electronics",
    status: "Normal",
    costTrend: "up", 
    delayTrend: "down",
    costChange: "+5.2%",
    delayChange: "-2 days"
  },
  { 
    id: 2, 
    name: "Industrial Sensor Array", 
    category: "Industrial",
    status: "Warning",
    costTrend: "up", 
    delayTrend: "up",
    costChange: "+12.7%",
    delayChange: "+5 days"
  },
  { 
    id: 3, 
    name: "Consumer Wearable", 
    category: "Electronics",
    status: "Critical",
    costTrend: "up", 
    delayTrend: "up",
    costChange: "+23.4%",
    delayChange: "+14 days"
  },
  { 
    id: 4, 
    name: "Office Equipment", 
    category: "Office",
    status: "Normal",
    costTrend: "down", 
    delayTrend: "down",
    costChange: "-3.1%",
    delayChange: "-1 day"
  },
  { 
    id: 5, 
    name: "Healthcare Monitor", 
    category: "Medical",
    status: "Warning",
    costTrend: "up", 
    delayTrend: "neutral",
    costChange: "+8.9%",
    delayChange: "No change"
  }
];

const ProductsOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <p className="text-xs text-muted-foreground mt-1">Across 5 categories</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Cost Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-finance-chart-red">+9.3%</div>
            <p className="text-xs text-muted-foreground mt-1">Average increase in last 30 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Supply Chain Delays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-finance-chart-red">+4.2 days</div>
            <p className="text-xs text-muted-foreground mt-1">Average increase in last 30 days</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-5 w-5 text-finance-accent-blue" />
            <span>Product Performance Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Cost Trend</TableHead>
                <TableHead>Delay Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.map((product) => (
                <TableRow key={product.id} className="cursor-pointer hover:bg-gray-900/50">
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block
                      ${product.status === 'Normal' ? 'bg-green-500/20 text-green-500' : 
                        product.status === 'Warning' ? 'bg-yellow-500/20 text-yellow-500' : 
                        'bg-red-500/20 text-red-500'}`}>
                      {product.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {product.costTrend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-finance-chart-red mr-1" />
                      ) : product.costTrend === 'down' ? (
                        <ArrowDown className="h-4 w-4 text-finance-chart-green mr-1" />
                      ) : null}
                      <span className={product.costTrend === 'up' ? 'text-finance-chart-red' : 'text-finance-chart-green'}>
                        {product.costChange}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {product.delayTrend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-finance-chart-red mr-1" />
                      ) : product.delayTrend === 'down' ? (
                        <ArrowDown className="h-4 w-4 text-finance-chart-green mr-1" />
                      ) : null}
                      <span 
                        className={
                          product.delayTrend === 'up' 
                            ? 'text-finance-chart-red' 
                            : product.delayTrend === 'down' 
                              ? 'text-finance-chart-green' 
                              : ''
                        }
                      >
                        {product.delayChange}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsOverview;
