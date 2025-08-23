import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { faqCategories, faqs } from "@/constants/faqs";
import { Mail, MessageCircle, Phone, Search } from "lucide-react";
import { Link } from "react-router";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-primary bg-gradient-to-b pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-slide-up mb-6 text-5xl font-bold md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p
              className="text-accent/90 animate-slide-up mb-8 text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              Find quick answers to common questions about using RideBook
            </p>

            {/* Search Bar */}
            <div
              className="animate-slide-up relative mx-auto max-w-md"
              style={{ animationDelay: "0.4s" }}
            >
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background/20 border-primary-foreground/20 text-foreground placeholder:text-muted-foreground pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Badges */}
      <section className="bg-gradient-subtle py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <Badge
                key={category.value}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {filteredFaqs.length === 0 ? (
              <Card className="card-gradient p-12 text-center">
                <Search className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
                <h3 className="mb-4 text-2xl font-semibold">
                  No results found
                </h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any questions matching your search. Try
                  different keywords or browse all questions below.
                </p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Show All Questions
                </Button>
              </Card>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border px-6"
                  >
                    <AccordionTrigger className="py-6 text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="capitalize">
                          {faq.category}
                        </Badge>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Still Need Help?</h2>
            <p className="text-muted-foreground mb-12 text-xl">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
                <div className="bg-gradient-primary text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant help from our support team available 24/7
                </p>
                <Link to="/contact">
                  <Button variant="default" className="w-full cursor-pointer">
                    Start Chat
                  </Button>
                </Link>
              </Card>

              <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
                <div className="bg-gradient-accent text-accent-foreground mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Call Support</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our customer service representatives
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full cursor-pointer">
                    Call Now
                  </Button>
                </Link>
              </Card>

              <Card className="card-gradient p-8 text-center transition-transform duration-300 hover:scale-105">
                <div className="bg-gradient-primary text-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us detailed questions and we'll respond within 24 hours
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full cursor-pointer">
                    Send Email
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
