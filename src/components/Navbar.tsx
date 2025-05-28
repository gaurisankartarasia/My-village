import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use React Router
// If not using React Router, replace <Link> with <a>

import { cn } from "@/lib/utils"; // Utility for conditional classnames
import {
  NavigationMenu,
  NavigationMenuContent, // If you want dropdowns
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, // If you want dropdowns
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // To close the sheet programmatically or with a button
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, MountainIcon } from "lucide-react"; // Example icons

// Define your navigation links
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
  // Example of a dropdown menu item (optional)
  {
    title: "More",
    isDropdown: true,
    dropdownItems: [
      { title: "Blog", href: "/blog", description: "Read our latest articles." },
      { title: "Careers", href: "/careers", description: "Join our amazing team." },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">MyApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.isDropdown ? ( // Check if it's a dropdown item
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdownItems?.map((component) => (
                              <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                              >
                                {component.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation Trigger (Hamburger Menu) */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-4">
                  <SheetTitle className="flex items-center justify-between">
                    <span>Menu</span>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                         <X className="h-5 w-5" />
                         <span className="sr-only">Close menu</span>
                       </Button>
                     </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-3">
                  {navLinks.map((item) =>
                    item.isDropdown ? (
                      <div key={item.title} className="space-y-1">
                        <p className="px-3 py-2 font-semibold text-sm text-muted-foreground">{item.title}</p>
                        {item.dropdownItems?.map((subItem) => (
                          <SheetClose asChild key={subItem.href}>
                            <Link
                              to={subItem.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                              {subItem.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild key={item.href}>
                        <Link
                          to={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper component for NavigationMenuContent items (if using dropdowns)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {/* If using React Router for these links too */}
        <Link
          to={href || "#"} // Fallback href
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";