import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for an experienced frontend developer to join our team and build amazing user experiences.",
    },
    {
      title: "Product Designer",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "Join our design team to create beautiful and intuitive interfaces for our products.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "Help us build and maintain scalable infrastructure for our growing platform.",
    },
    {
      title: "Marketing Manager",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description:
        "Lead our marketing efforts and help us reach new audiences across the globe.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're always looking for talented individuals who are passionate
              about technology and innovation. Explore our current openings and
              become part of something amazing.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {jobOpenings.map((job, index) => (
              <motion.div key={index} variants={item}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>
                    <Button className="bg-foreground text-background hover:bg-foreground/90">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why 10x?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and development opportunities
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative and inclusive work environment
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Work on projects that make a real difference
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
