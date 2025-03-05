import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IFormModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

export function FormModal<T>({
  isOpen,
  onClose,
  onSubmit,
  children
}: IFormModalProps<T>) {
  const handleSubmit = async (data: T) => {
    await onSubmit(data);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-[#EFF3F4]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={
            handleSubmit as unknown as React.FormEventHandler<HTMLFormElement>
          }
        >
          {children}
          <DialogFooter className="mt-3">
            <Button
              onClick={onClose}
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
