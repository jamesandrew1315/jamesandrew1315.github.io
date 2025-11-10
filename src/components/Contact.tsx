'use client';

const Contact = () => {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          Email me at{' '}
          <a 
            href="mailto:jamesandrew1315@gmail.com" 
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            jamesandrew1315@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700">
          Connect with me on LinkedIn{' '}
          <a 
            href="https://linkedin.com/in/jamesandrewtamayo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;