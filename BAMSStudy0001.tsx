import { useState, useEffect } from 'react';
import { useAuth } from '@getmocha/users-service/react';
import { BookOpen, Download, Lock, Star, GraduationCap, Award, CheckCircle } from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';
import LoginModal from '@/react-app/components/LoginModal';

interface BAMSBook {
  id: number;
  title: string;
  author: string;
  subject: string;
  year_of_study: number;
  semester: number;
  description: string;
  page_count: number;
  language: string;
  is_free: boolean;
  price: number;
  file_size_mb: number;
  cover_image_url?: string;
}

interface UserBookAccess {
  book_id: number;
  access_type: string;
  purchased_at?: string;
}

export default function BAMSStudyPage() {
  const { user } = useAuth();
  const [books, setBooks] = useState<BAMSBook[]>([]);
  const [userAccess, setUserAccess] = useState<UserBookAccess[]>([]);
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [yearFilter, setYearFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Sample BAMS books data
  const sampleBooks: BAMSBook[] = [
    {
      id: 1,
      title: "Fundamental Principles of Ayurveda",
      author: "Dr. Ramesh Sharma",
      subject: "Basic Principles",
      year_of_study: 1,
      semester: 1,
      description: "Comprehensive introduction to Ayurvedic principles, doshas, and basic concepts essential for BAMS students.",
      page_count: 320,
      language: "English",
      is_free: true,
      price: 0,
      file_size_mb: 15.2,
      cover_image_url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
    },
    {
      id: 2,
      title: "Anatomy and Physiology in Ayurveda",
      author: "Dr. Priya Nair",
      subject: "Rachana Sharir",
      year_of_study: 1,
      semester: 2,
      description: "Detailed study of human anatomy and physiology from Ayurvedic perspective with modern correlations.",
      page_count: 450,
      language: "English",
      is_free: true,
      price: 0,
      file_size_mb: 22.8,
      cover_image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400"
    },
    {
      id: 3,
      title: "Dravyaguna Vigyan - Medicinal Plants",
      author: "Dr. Anil Kumar",
      subject: "Dravyaguna",
      year_of_study: 2,
      semester: 1,
      description: "Complete guide to medicinal plants, their properties, and therapeutic applications in Ayurveda.",
      page_count: 380,
      language: "English",
      is_free: true,
      price: 0,
      file_size_mb: 18.5,
      cover_image_url: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400"
    },
    {
      id: 4,
      title: "Advanced Panchakarma Therapy",
      author: "Dr. Rajesh Kotecha",
      subject: "Panchakarma",
      year_of_study: 3,
      semester: 2,
      description: "In-depth study of Panchakarma procedures, indications, contraindications, and practical applications.",
      page_count: 520,
      language: "English",
      is_free: false,
      price: 99,
      file_size_mb: 25.7,
      cover_image_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 5,
      title: "Ayurvedic Pathology & Diagnosis",
      author: "Dr. Meera Patel",
      subject: "Rog Nidan",
      year_of_study: 2,
      semester: 2,
      description: "Comprehensive guide to disease diagnosis and pathology according to Ayurvedic principles.",
      page_count: 410,
      language: "English",
      is_free: false,
      price: 99,
      file_size_mb: 20.3,
      cover_image_url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 6,
      title: "Rasayana and Vajikarana Therapy",
      author: "Dr. Suresh Babu",
      subject: "Rasayana",
      year_of_study: 4,
      semester: 1,
      description: "Study of rejuvenation and aphrodisiac therapies with practical formulations and applications.",
      page_count: 350,
      language: "English",
      is_free: false,
      price: 99,
      file_size_mb: 16.8,
      cover_image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    },
    {
      id: 7,
      title: "Kayachikitsa - Internal Medicine",
      author: "Dr. Vandana Singh",
      subject: "Kayachikitsa",
      year_of_study: 3,
      semester: 1,
      description: "Complete textbook on Ayurvedic internal medicine with case studies and treatment protocols.",
      page_count: 480,
      language: "English",
      is_free: false,
      price: 99,
      file_size_mb: 23.9,
      cover_image_url: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400"
    },
    {
      id: 8,
      title: "Shalya Tantra - Ayurvedic Surgery",
      author: "Dr. Mahesh Gupta",
      subject: "Shalya Tantra",
      year_of_study: 4,
      semester: 2,
      description: "Principles and practices of Ayurvedic surgery with modern surgical correlations.",
      page_count: 390,
      language: "English",
      is_free: false,
      price: 99,
      file_size_mb: 19.2,
      cover_image_url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400"
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBooks(sampleBooks);
      setLoading(false);
    }, 1000);

    // Fetch user's book access if logged in
    if (user) {
      fetchUserAccess();
    }
  }, [user]);

  const fetchUserAccess = async () => {
    // Simulate fetching user's book access
    const freeAccess = sampleBooks
      .filter(book => book.is_free)
      .map(book => ({
        book_id: book.id,
        access_type: 'free'
      }));
    setUserAccess(freeAccess);
  };

  const handleBookAccess = (book: BAMSBook) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (book.is_free || userAccess.some(access => access.book_id === book.id)) {
      // Grant access to book
      alert(`Opening ${book.title}...`);
    } else {
      // Show premium purchase option
      handlePremiumPurchase(book);
    }
  };

  const handlePremiumPurchase = (book: BAMSBook) => {
    const confirmed = confirm(`Purchase ${book.title} for ₹${book.price}?`);
    if (confirmed) {
      // Simulate purchase
      const newAccess: UserBookAccess = {
        book_id: book.id,
        access_type: 'premium',
        purchased_at: new Date().toISOString()
      };
      setUserAccess([...userAccess, newAccess]);
      alert('Purchase successful! You now have access to this book.');
    }
  };

  const hasAccess = (bookId: number) => {
    return userAccess.some(access => access.book_id === bookId);
  };

  const filteredBooks = books.filter(book => {
    if (yearFilter && book.year_of_study.toString() !== yearFilter) return false;
    if (subjectFilter && book.subject !== subjectFilter) return false;
    return true;
  });

  const freeBookCount = userAccess.filter(access => access.access_type === 'free').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading BAMS study materials...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BAMS Study Materials
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive study materials for Bachelor of Ayurvedic Medicine and Surgery (BAMS) students.
            Access free books and premium content for your academic journey.
          </p>
        </div>

        {/* User Status & Access Info */}
        {user && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Welcome, {user.google_user_data.given_name || 'Student'}!
                  </h3>
                  <p className="text-gray-600">Your learning progress and access status</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{freeBookCount}/3</div>
                <div className="text-sm text-gray-500">Free books accessed</div>
              </div>
            </div>
            
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-semibold text-green-700">Free Access</div>
                <div className="text-sm text-green-600">3 books available</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="font-semibold text-purple-700">Premium Content</div>
                <div className="text-sm text-purple-600">₹99 per book</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-semibold text-blue-700">Your Books</div>
                <div className="text-sm text-blue-600">{userAccess.length} total access</div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study</label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Years</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Subjects</option>
                <option value="Basic Principles">Basic Principles</option>
                <option value="Rachana Sharir">Rachana Sharir</option>
                <option value="Dravyaguna">Dravyaguna</option>
                <option value="Panchakarma">Panchakarma</option>
                <option value="Rog Nidan">Rog Nidan</option>
                <option value="Kayachikitsa">Kayachikitsa</option>
                <option value="Shalya Tantra">Shalya Tantra</option>
                <option value="Rasayana">Rasayana</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{filteredBooks.length}</div>
                <div className="text-sm text-gray-500">Available Books</div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {book.cover_image_url ? (
                  <img 
                    src={book.cover_image_url} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BookOpen className="w-16 h-16 text-blue-500" />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm">by {book.author}</p>
                  </div>
                  <div className="ml-2">
                    {book.is_free ? (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Free
                      </span>
                    ) : (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        ₹{book.price}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subject:</span>
                    <span className="font-medium text-gray-700">{book.subject}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Year:</span>
                    <span className="font-medium text-gray-700">{book.year_of_study} - Semester {book.semester}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Pages:</span>
                    <span className="font-medium text-gray-700">{book.page_count}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>

                <button
                  onClick={() => handleBookAccess(book)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    hasAccess(book.id) || book.is_free
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {!user ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Sign In to Access</span>
                    </>
                  ) : hasAccess(book.id) || book.is_free ? (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Read Book</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Purchase ₹{book.price}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">About BAMS Study Materials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Free Access</h3>
              <p className="text-blue-100">
                Get started with 3 essential BAMS textbooks absolutely free. Perfect for first-year students 
                and those beginning their Ayurvedic medicine journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Premium Content</h3>
              <p className="text-blue-100">
                Access advanced textbooks, specialized subjects, and comprehensive study materials for just ₹99 per book. 
                Unlock your full academic potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </div>
  );
}
