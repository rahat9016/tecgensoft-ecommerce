import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Modal() {
  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="button"
            className="bg-main-secondary hover:bg-main-secondary-dark font-poppins "
          >
            Close
          </Button>
          <Button
            type="submit"
            className="bg-main-primary hover:bg-main-primary-dark font-poppins "
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
