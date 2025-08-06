export const ColorfulWord = ({ children, size }) => {
  const colors = [
    'text-blue-500',
    'text-yellow-400',
    'text-red-500',
    'text-orange-500',
    'text-green-500',
    'text-purple-700',
  ];

  return (
    <div className="flex space-x-2">
      {Array.from(children).map((letter, index) => (
        <span
          key={index}
          className={`${size} ${colors[index % colors.length]}`}
          style={{ fontFamily: 'Luckiest Guy' }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};