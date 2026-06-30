import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skillLevel: 'Intermediate',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you.');
  };

  const fieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="apply"
      className="bg-sage pt-[86px] pb-[104px] border-t border-sage-dark"
    >
      <div className="w-full px-6">
        <div className="max-w-[850px] mx-auto text-center">
          <h2 className="font-display italic text-text-primary text-[54px] leading-none">
            Apply for A Seat
          </h2>
          <p className="mt-5 text-text-secondary text-[20px] leading-[27px]">
            Participation is limited and intentionally curated. We review every
            application to ensure alignment, commitment, and a focused group
            environment. Pricing and availability are shared privately with
            approved applicants.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto mt-[48px] grid grid-cols-1 md:grid-cols-[542px_810px] justify-between gap-12">
          <FadeIn y={30}>
            <div className="rounded-2xl overflow-hidden h-full max-h-[600px]">
              <img
                src="/images/apply-image.jpg"
                alt="Hands kneading dough"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn y={30} delay={0.08}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {/* Name */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Your full name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow"
                  required
                />
              </motion.div>

              {/* Role */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Current role or practice
                </label>
                <input
                  type="text"
                  placeholder="Chef, instructor, founder, artist, etc."
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow"
                />
              </motion.div>

              {/* Skill Level */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  How would you describe your current skill level?
                </label>
                <select
                  value={formData.skillLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, skillLevel: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow appearance-none cursor-pointer"
                >
                  <option>Foundational</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full py-3.5 bg-olive text-cream rounded-lg font-medium text-sm hover:bg-olive-light transition-colors"
                variants={fieldVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Submit
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
