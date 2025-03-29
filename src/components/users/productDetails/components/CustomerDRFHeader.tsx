const CustomerDRFHeader = ({ header }: { header: string }) => {
  return (
    <div className="bg-cultured py-[11px] text-center rounded-5px">
      <h3 className="font-semibold text-sm text-primary-dark">{header}</h3>
    </div>
  );
};

export default CustomerDRFHeader;
