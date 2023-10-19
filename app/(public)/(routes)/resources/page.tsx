
import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ResourcesJumbotron from './components/resources-jumbotron';

const ResourcesPage = () => {
  return (
    <div>
      <ResourcesJumbotron />
        <section className="container mb-32">
          
        <Tabs defaultValue="case-studies" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="white-papers">White Papers</TabsTrigger>
          </TabsList>
          <TabsContent value="case-studies">
            <Card>
              <CardHeader>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
        
        
              </CardContent>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Events</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">


              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Guides</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">


              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="videos">
            <Card>
              <CardHeader>
                <CardTitle>Videos</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">


              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="webinars">
            <Card>
              <CardHeader>
                <CardTitle>Webinars</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">


              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="white-papers">
            <Card>
              <CardHeader>
                <CardTitle>White Papers</CardTitle>
                <CardDescription>
                  Taking your supply chain to the next level can require help from an outside organization. These stories show the innovation our people deliver to customers facing complex shipping challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">


              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

      </section>
    </div>
  );
};

export default ResourcesPage;
