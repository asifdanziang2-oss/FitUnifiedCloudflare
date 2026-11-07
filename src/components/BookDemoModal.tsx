import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(1, "This field is required.").max(100),
  phone: z.string().trim().min(1, "This field is required.").regex(/^\d{7,15}$/, "Enter a valid phone number."),
  gymName: z.string().trim().min(1, "This field is required.").max(100),
  city: z.string().trim().min(1, "This field is required.").max(100),
  message: z.string().trim().min(1, "This field is required.").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoModal = ({ open, onOpenChange }: BookDemoModalProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", gymName: "", city: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = (data: FormValues) => {
    const text = encodeURIComponent(
      `Hi, I'd like to book a demo.\n\nName: ${data.name}\nPhone: ${data.phone}\nGym: ${data.gymName}\nCity: ${data.city}\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/918799721197?text=${text}`, "_blank");
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-center">
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Fill in your details and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormControl><Input placeholder="Your Name" className="rounded-full px-5 h-11" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormControl><Input placeholder="Phone Number" type="tel" className="rounded-full px-5 h-11" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="gymName" render={({ field }) => (
              <FormItem>
                <FormControl><Input placeholder="Gym Name" className="rounded-full px-5 h-11" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="city" render={({ field }) => (
              <FormItem>
                <FormControl><Input placeholder="City" className="rounded-full px-5 h-11" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormControl><Textarea placeholder="Your Message" className="rounded-2xl px-5 py-3 min-h-[100px]" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" variant="gradient" size="lg" className="w-full rounded-full text-base">
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;
