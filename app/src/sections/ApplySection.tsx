import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: '',
    skillLevel: 'Not sure yet',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! SALAD will review your goals and get back to you with a recommended next step.');
  };

  const fieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="apply"
      className="bg-sage pt-[74px] pb-[88px] border-t border-sage-dark md:pt-[86px] md:pb-[104px]"
    >
      <div className="w-full px-5 md:px-6">
        <div className="max-w-[850px] mx-auto text-center">
          <h2 className="font-display italic text-text-primary text-[42px] leading-[0.98] md:text-[54px] md:leading-none">
            Find Your SALAD Class
          </h2>
          <p className="mt-4 text-text-secondary text-[16.5px] leading-[24px] md:mt-5 md:text-[20px] md:leading-[27px]">
            Tell us what you want to learn, where you are starting from, and
            what schedule works best. SALAD will help you find the right level,
            teacher, and class format.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto mt-[48px] grid grid-cols-1 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:grid-cols-[minmax(360px,542px)_minmax(0,1fr)] justify-between gap-10 lg:gap-12">
          <FadeIn y={30}>
            <div className="rounded-[12px] overflow-hidden h-[320px] md:h-full md:max-h-[600px] md:rounded-2xl">
              <img
                src="/images/salad-contact-lesson.png"
                alt="Online language lesson with French and English notes"
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
                  Language you want to learn
                </label>
                <input
                  type="text"
                  placeholder="French, English, Spanish, Cantonese, etc."
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow"
                />
              </motion.div>

              {/* Skill Level */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Current level
                </label>
                <select
                  value={formData.skillLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, skillLevel: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-sage-dark rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-olive/30 transition-shadow appearance-none cursor-pointer"
                >
                  <option>Not sure yet</option>
                  <option>Beginner</option>
                  <option>Elementary</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional or workplace training</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <label className="block text-text-primary text-sm font-medium mb-2">
                  Learning goals or preferred schedule
                </label>
                <textarea
                  placeholder="Tell us about your goals, availability, or whether you are asking for yourself, a team, or an organization."
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
                Request Class Guidance
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
