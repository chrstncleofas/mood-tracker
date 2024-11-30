interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
  }
  
  export default function Label({ htmlFor, children }: LabelProps): JSX.Element {
    return (
      <label htmlFor={htmlFor} className="font-medium text-gray-700">
        {children}
      </label>
    );
  }
  