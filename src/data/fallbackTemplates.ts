import { CommunicationTone } from '../lib/schemas';

interface FallbackTemplate {
  morning: string[];
  evening: string[];
  weekly: string[];
  avoid: string[];
  useWhatYouOwn: string[];
  safetyBase: string;
  summaries: Record<CommunicationTone, string>;
  titles: Record<CommunicationTone, string>;
}

export const FALLBACK_TEMPLATES: Record<string, FallbackTemplate> = {
  dryness: {
    morning: [
      'Gently cleanse with a mild, fragrance-free cleanser.',
      'Apply a moisturiser while skin is still damp.',
    ],
    evening: [
      'Cleanse again if makeup or sunscreen was used.',
      'Apply a thicker moisturiser or occlusive after bathing.',
    ],
    weekly: [
      'Use a humidifier for 20 minutes during dry evenings.',
    ],
    avoid: [
      'Hot water and long baths',
      'Fragranced or alcohol-rich products',
      'Excessive exfoliation',
      'Harsh scrubs',
    ],
    useWhatYouOwn: [
      'Your current gentle cleanser, if it is fragrance-free',
      'A plain moisturiser from your routine',
    ],
    safetyBase: 'If skin is cracking, painful, persistently inflamed, or shows signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A calm, moisturizing approach to support comfortable skin without stripping it.',
      direct: 'Focus on gentle cleansing and consistent moisturizing.',
      curious: 'Dryness often responds to barrier support. This routine prioritises hydration and minimizing irritation.',
      minimal: 'Cleanse gently, moisturize twice daily, avoid irritation.',
    },
    titles: {
      gentle: 'Gentle Hydration Routine',
      direct: 'Simple Moisture Support',
      curious: 'Hydration-Focused Routine',
      minimal: 'Minimal Moisture Plan',
    },
  },
  'oil-control': {
    morning: [
      'Cleanse with a gentle, non-stripping cleanser.',
      'Apply a lightweight, oil-free moisturiser.',
    ],
    evening: [
      'Cleanse again to remove sunscreen and buildup.',
      'Use an oil-free moisturiser.',
    ],
    weekly: [
      'Gently exfoliate once with a mild chemical exfoliant (not daily).',
    ],
    avoid: [
      'Heavy or occlusive products',
      'Over-washing or scrubbing',
      'Alcohol-heavy toners',
      'Hot water',
    ],
    useWhatYouOwn: [
      'Your current gentle cleanser',
      'An oil-free moisturizer you tolerate well',
    ],
    safetyBase: 'If excessive oiliness is sudden, painful, or accompanied by swelling, consult a qualified professional.',
    summaries: {
      gentle: 'A balanced approach that controls oil without stripping the skin barrier.',
      direct: 'Cleanse gently, moisturize lightly, avoid heavy products.',
      curious: 'Over-cleansing increases oil. This plan supports the barrier to reduce compensatory oiliness.',
      minimal: 'Gentle cleanse, light moisturizer, sunscreen. No heavy products.',
    },
    titles: {
      gentle: 'Balanced Oil Care',
      direct: 'Oil Management Routine',
      curious: 'Barrier-Supportive Oil Routine',
      minimal: 'Minimal Oil Control',
    },
  },
  'breakout-care': {
    morning: [
      'Gently cleanse with a non-comedogenic, fragrance-free cleanser.',
      'Apply a lightweight, oil-free moisturiser.',
    ],
    evening: [
      'Double cleanse only if sunscreen or heavy makeup was used.',
      'Use a spot treatment containing benzoyl peroxide or salicylic acid only on active spots.',
    ],
    weekly: [
      'Use a gentle exfoliating mask once weekly.',
    ],
    avoid: [
      'Heavy or oil-based products',
      'Picking or squeezing blemishes',
      'Harsh physical scrubs',
      'Over-exfoliating',
    ],
    useWhatYouOwn: [
      'A gentle, non-comedogenic cleanser',
      'An oil-free moisturizer',
      'A spot treatment if you use one tolerably',
    ],
    safetyBase: 'If acne is severe, widespread, deeply painful, or shows signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A soothing yet effective approach to support clear skin without irritating it.',
      direct: 'Keep pores clear with gentle cleansing and targeted spot care.',
      curious: 'Comedones form from clogged pores. This routine minimises occlusion while supporting the barrier.',
      minimal: 'Gentle cleanse, light moisturizer, sunscreen. Targeted treatment only on spots.',
    },
    titles: {
      gentle: 'Gentle Clear-Skin Routine',
      direct: 'Breakout-Safe Routine',
      curious: 'Pore-Friendly Routine',
      minimal: 'Minimal Acne Support',
    },
  },
  'uneven-appearance': {
    morning: [
      'Gently cleanse with a mild cleanser.',
      'Apply a vitamin C or niacinamide serum if tolerated.',
    ],
    evening: [
      'Cleanse gently.',
      'Apply a retinoid alternative such as bakuchiol or niacinamide if tolerated.',
    ],
    weekly: [
      'Gently exfoliate 1-2 times per week with an AHA or BHA product.',
    ],
    avoid: [
      'Physical scrubs and harsh exfoliants',
      'Over-exfoliating',
      'Picking or scrubbing the area',
      'Strong or experimental treatments',
    ],
    useWhatYouOwn: [
      'A gentle cleanser from your routine',
      'A serum or moisturizer you already tolerate',
    ],
    safetyBase: 'If discoloration appears suddenly, spreads, or is accompanied by pain or persistent irritation, consult a qualified professional.',
    summaries: {
      gentle: 'A gradual, soothing plan that supports even texture over time.',
      direct: 'Exfoliate gently and support the barrier for gradual improvement.',
      curious: 'Even texture comes from cell renewal and barrier support. This routine encourages that gently.',
      minimal: 'Gentle cleanse, sunscreen daily, optional niacinamide or vitamin C if tolerated.',
    },
    titles: {
      gentle: 'Even Texture Routine',
      direct: 'Appearance-Support Routine',
      curious: 'Cell-Renewal Support Plan',
      minimal: 'Minimal Evenness Plan',
    },
  },
  'rough-texture': {
    morning: [
      'Gently cleanse with a mild cleanser.',
      'Apply a hydrating moisturiser.',
    ],
    evening: [
      'Cleanse gently.',
      'Apply a richer moisturiser or treatment containing urea or lactic acid if tolerated.',
    ],
    weekly: [
      'Exfoliate once weekly with a mild chemical exfoliant.',
    ],
    avoid: [
      'Harsh physical scrubs',
      'Over-exfoliating',
      'Hot water',
      'Products with high alcohol content',
    ],
    useWhatYouOwn: [
      'A gentle cleanser you already use',
      'A moisturizing lotion or cream from your collection',
    ],
    safetyBase: 'If roughness is painful, bleeding, or persists despite gentle care, consult a qualified professional.',
    summaries: {
      gentle: 'Soft, consistent care to smooth texture without stressing the skin.',
      direct: 'Exfoliate gently and hydrate for smoother texture.',
      curious: 'Roughness from buildup improves with gentle exfoliation and hydration.',
      minimal: 'Cleanse gently, hydrate twice daily, exfoliate once weekly.',
    },
    titles: {
      gentle: 'Smooth Texture Routine',
      direct: 'Texture Support Plan',
      curious: 'Gentle Smoothing Routine',
      minimal: 'Minimal Texture Care',
    },
  },
  'shaving-care': {
    morning: [
      'Cleanse the area gently before shaving.',
      'Shave with a clean, sharp razor and a fragrance-free shaving product or gel.',
    ],
    evening: [
      'Rinse with cool water after shaving.',
      'Apply a fragrance-free moisturiser or after-shave balm.',
    ],
    weekly: [
      'Use a gentle exfoliating scrub or acid product once weekly to prevent ingrown hairs.',
    ],
    avoid: [
      'Dull or multiple-blade razors',
      'Fragranced shaving products',
      'Shaving too closely or repeatedly',
      'Applying alcohol-based products after shaving',
    ],
    useWhatYouOwn: [
      'A gentle cleanser',
      'Your current shaving product if it is fragrance-free',
      'A plain moisturizer or after-shave balm',
    ],
    safetyBase: 'If shaving causes persistent irritation, cuts, or signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A gentle shaving routine that minimiress irritation and supports recovery.',
      direct: 'Shave with a sharp razor and gentle products, then moisturize.',
      curious: 'Irritation happens when the barrier is compromised. This plan keeps things calm.',
      minimal: 'Clean razor, gentle shave, moisturize after. No harsh products.',
    },
    titles: {
      gentle: 'Gentle Shave Care',
      direct: 'Shave Support Routine',
      curious: 'Irritation-Free Shaving Plan',
      minimal: 'Minimal Shave Care',
    },
  },
  'friction-care': {
    morning: [
      'Cleanse the area gently and pat dry.',
      'Apply a moisture-barrier product (such as a plain moisturizer or petroleum-free balm).',
    ],
    evening: [
      'Cleanse again if needed.',
      'Re-apply a moisturizing product before bed.',
    ],
    weekly: [
      'Exfoliate very gently once weekly if skin tolerates it.',
    ],
    avoid: [
      'Repeated rubbing or tight clothing',
      'Harsh soaps or scrubs',
      'Wearing abrasive fabrics next to the skin',
      'Excessive moisture or occlusion without cleaning',
    ],
    useWhatYouOwn: [
      'A gentle cleanser',
      'A plain moisturizer or barrier balm from your routine',
    ],
    safetyBase: 'If friction causes bleeding, open sores, or signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A soothing plan to reduce friction discomfort and support healing.',
      direct: 'Reduce friction and keep skin moisturized.',
      curious: 'Repeated contact causes micro-irritation. This plan minimises friction and supports the barrier.',
      minimal: 'Cleanse gently, moisturize, reduce rubbing. Avoid tight clothing.',
    },
    titles: {
      gentle: 'Friction Relief Routine',
      direct: 'Comfort Support Plan',
      curious: 'Friction-Minimizing Routine',
      minimal: 'Minimal Friction Care',
    },
  },
  'sweat-odour': {
    morning: [
      'Cleanse with a gentle, fragrance-free antibacterial wash if needed.',
      'Apply a clinical-strength antiperspirant (if using) and allow to dry before dressing.',
    ],
    evening: [
      'Cleanse again if the area feels sweaty or sticky.',
      'Apply a plain moisturiser only if the area feels dry.',
    ],
    weekly: [
      'Use a gentle exfoliating product 1-2 times weekly.',
    ],
    avoid: [
      'Alcohol-based or harsh products',
      'Over-applying strong fragrances',
      'Retaining moisture in skin folds',
      'Using unpreserved or homemade remedies',
    ],
    useWhatYouOwn: [
      'A gentle cleanser or wash',
      'A plain moisturizer if skin feels dry after washing',
    ],
    safetyBase: 'If odor or sweating changes suddenly, is severe, or is accompanied by pain or spreading redness, consult a qualified professional.',
    summaries: {
      gentle: 'A calm approach to managing moisture and odor without irritation.',
      direct: 'Keep the area clean and dry with gentle products.',
      curious: 'Odor comes from bacteria on sweat. Gentle cleansing and breathability help.',
      minimal: 'Gentle cleanse, keep dry, use antiperspirant if desired. No heavy scents.',
    },
    titles: {
      gentle: 'Gentle Odor Management',
      direct: 'Freshness Routine',
      curious: 'Bacteria-Reducing Routine',
      minimal: 'Minimal Odor Care',
    },
  },
  'scalp-flakes': {
    morning: [
      'Gently massage the scalp and rinse with lukewarm water.',
      'Use a gentle, fragrance-free shampoo.',
    ],
    evening: [
      'If needed, use an anti-dandruff shampoo (zinc pyrithione or ketoconazole) 1-2 times weekly.',
    ],
    weekly: [
      'Leave an anti-dandruff treatment on for 5 minutes before rinsing once weekly.',
    ],
    avoid: [
      'Scratching or picking at the scalp',
      'Hot water rinses',
      'Heavy oils or butters on the scalp',
      'Over-washing daily',
    ],
    useWhatYouOwn: [
      'A gentle shampoo from your routine',
      'An anti-dandruff shampoo if you already own one',
    ],
    safetyBase: 'If flakes are heavy, painful, bleeding, or accompanied by sores or severe redness, consult a qualified professional.',
    summaries: {
      gentle: 'A soothing scalp routine that gently manages flakes without irritation.',
      direct: 'Use a gentle shampoo and treat flakes weekly.',
      curious: 'Flakes often come from an overactive scalp or dryness. Gentle care helps restore balance.',
      minimal: 'Gentle shampoo, anti-dandruff treatment weekly as needed. Do not scratch.',
    },
    titles: {
      gentle: 'Calm Scalp Routine',
      direct: 'Flake Management Plan',
      curious: 'Scalp Balance Routine',
      minimal: 'Minimal Scalp Care',
    },
  },
  'scalp-oil': {
    morning: [
      'Use a clarifying or gentle daily shampoo, focusing on the scalp.',
      'Rinse thoroughly with cool water.',
    ],
    evening: [
      'If no buildup, co-wash or rinse only.',
    ],
    weekly: [
      'Use a clarifying shampoo once weekly if buildup reappears.',
    ],
    avoid: [
      'Heavy oils or butters on the scalp',
      'Not rinsing conditioner into the scalp',
      'Over-applying styling products at the roots',
      'Hot water',
    ],
    useWhatYouOwn: [
      'A gentle daily shampoo',
      'A conditioner applied only to mid-lengths and ends',
    ],
    safetyBase: 'If an itchy, oily scalp develops sores, severe redness, or sudden hair shedding, consult a qualified professional.',
    summaries: {
      gentle: 'A clarifying routine that balances scalp oil without over-drying.',
      direct: 'Shampoo the scalp, condition the ends, clarify weekly.',
      curious: 'Oil builds up from products and scalp activity. This plan removes it gently.',
      minimal: 'Daily shampoo on scalp, conditioner on ends only. Clarify weekly.',
    },
    titles: {
      gentle: 'Balanced Scalp Routine',
      direct: 'Oil Control Routine',
      curious: 'Scalp Cleansing Plan',
      minimal: 'Minimal Scalp Care',
    },
  },
  'hair-dryness': {
    morning: [
      'Apply a leave-in conditioner or light oil to damp hair.',
    ],
    evening: [
      'Apply a deep conditioning mask once weekly.',
    ],
    weekly: [
      'Deep condition 1-2 times per week with a hydrating mask.',
    ],
    avoid: [
      'Heat styling daily',
      'Alcohol-based products',
      'Over-washing',
      'Rough towel-drying',
    ],
    useWhatYouOwn: [
      'A conditioner you already own',
      'A leave-in product from your routine',
    ],
    safetyBase: 'If hair is breaking excessively, the scalp is painful, or there is sudden significant shedding, consult a qualified professional.',
    summaries: {
      gentle: 'A nourishing routine that hydrates hair gently and consistently.',
      direct: 'Condition and protect hair from heat and dryness.',
      curious: 'Dry hair lacks moisture and protein balance. This plan restores hydration.',
      minimal: 'Leave-in conditioner, deep condition weekly, limit heat.',
    },
    titles: {
      gentle: 'Nourishing Hair Routine',
      direct: 'Moisture Hair Plan',
      curious: 'Hydrating Hair Routine',
      minimal: 'Minimal Hair Care',
    },
  },
  'hair-frizz': {
    morning: [
      'Apply an anti-frizz serum or light oil to damp hair.',
    ],
    evening: [
      'Apply a light serum or oil to dry ends overnight if needed.',
    ],
    weekly: [
      'Deep condition weekly to maintain moisture balance.',
    ],
    avoid: [
      'Alcohol-heavy products',
      'Over-washing',
      'Humid weather without protection',
      'Rough handling when wet',
    ],
    useWhatYouOwn: [
      'A conditioner from your collection',
      'A serum or light oil you already use',
    ],
    safetyBase: 'If frizz is accompanied by breakage, scalp pain, or sudden hair loss, consult a qualified professional.',
    summaries: {
      gentle: 'A smoothing routine that tames frizz without weighing hair down.',
      direct: 'Use anti-frizz products and protect from humidity.',
      curious: 'Frizz forms when the hair cuticle lifts. Sealing in moisture and smoothing the cuticle helps.',
      minimal: 'Light serum, gentle drying, weekly deep condition. No heavy oils on roots.',
    },
    titles: {
      gentle: 'Smooth Hair Routine',
      direct: 'Frizz Control Plan',
      curious: 'Cuticle-Smoothing Routine',
      minimal: 'Minimal Frizz Care',
    },
  },
  'hair-breakage': {
    morning: [
      'Apply a strengthening leave-in or light oil to mid-lengths and ends.',
    ],
    evening: [
      'Braid or loosely tie hair to reduce friction while sleeping.',
    ],
    weekly: [
      'Use a protein-moisture balancing mask once weekly.',
    ],
    avoid: [
      'Tight hairstyles',
      'Heat styling on wet hair',
      'Brushing roughly when wet',
      'Excessive elastics or claw clips',
    ],
    useWhatYouOwn: [
      'A conditioner from your routine',
      'A light serum or oil you already own',
    ],
    safetyBase: 'If hair breaks excessively, thins noticeably, or the scalp is painful, consult a qualified professional.',
    summaries: {
      gentle: 'A protective routine that strengthens hair and reduces breakage gently.',
      direct: 'Protect hair from stress and apply strengthening products.',
      curious: 'Breakage happens at the weakest point. This plan protects and strengthens.',
      minimal: 'Leave-in for ends, loose styling, weekly mask. No tight styles.',
    },
    titles: {
      gentle: 'Strengthening Hair Routine',
      direct: 'Breakage Prevention Plan',
      curious: 'Hair Strength Routine',
      minimal: 'Minimal Hair Protection',
    },
  },
  'nail-cuticle-care': {
    morning: [
      'Wash hands or feet gently.',
      'Apply a nail and cuticle oil.',
    ],
    evening: [
      'Push back cuticles gently after a bath if needed.',
      'Apply a richer hand or foot cream.',
    ],
    weekly: [
      'Buff nails lightly and moisturize overnight with creams.',
    ],
    avoid: [
      'Cutting cuticles aggressively',
      'Using nails as tools',
      'Harsh acetone or gels without professional help',
      'Sharing nail tools',
    ],
    useWhatYouOwn: [
      'A hand or foot cream you already use',
      'A cuticle oil if you own one',
    ],
    safetyBase: 'If nails are painful, thickened, discolored, or show signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A nurturing routine that keeps nails and cuticles healthy and comfortable.',
      direct: 'Moisturize nails and cuticles daily.',
      curious: 'Nails reflect overall health. This plan keeps them nourished and protected.',
      minimal: 'Daily moisturizer, weekly focused care on hands and feet.',
    },
    titles: {
      gentle: 'Nurturing Nail Routine',
      direct: 'Cuticle Care Plan',
      curious: 'Nail Health Routine',
      minimal: 'Minimal Nail Care',
    },
  },
  'foot-care': {
    morning: [
      'Wash and dry feet carefully, especially between the toes.',
      'Apply a plain moisturiser to dry areas, avoiding between the toes.',
    ],
    evening: [
      'After bathing, reapply moisturizer to heels and rough patches.',
      'Wear clean socks if your feet tend to feel dry or irritated.',
    ],
    weekly: [
      'Soften rough skin gradually with a gentle foot file if tolerated.',
    ],
    avoid: [
      'Cutting deep cracks or calluses yourself',
      'Very hot water',
      'Aggressive scrubbing',
      'Leaving feet damp for long periods',
    ],
    useWhatYouOwn: [
      'A plain moisturizer or cream you already use',
      'Clean socks and a gentle towel-dry routine',
    ],
    safetyBase: 'If feet are painful, red, swollen, cracking deeply, or showing signs of infection, consult a qualified professional.',
    summaries: {
      gentle: 'A practical foot-care routine that focuses on comfort and gradual smoothing.',
      direct: 'Wash, dry, moisturize, and avoid harsh tools.',
      curious: 'Feet often need extra moisture and gentle maintenance. This plan keeps things simple.',
      minimal: 'Wash, dry, moisturize, and wear clean socks.',
    },
    titles: {
      gentle: 'Gentle Foot Care',
      direct: 'Simple Foot Routine',
      curious: 'Comfort-First Foot Care',
      minimal: 'Minimal Foot Plan',
    },
  },
};

export const GENERIC_FALLBACK: FallbackTemplate = {
  morning: [
    'Gently cleanse with a mild, fragrance-free cleanser.',
    'Apply a plain moisturiser while skin is damp.',
  ],
  evening: [
    'Cleanse again if sunscreen or products were used.',
    'Apply a richer moisturizer before bed.',
  ],
  weekly: [
    'Moisturize consistently and observe how the area responds.',
  ],
  avoid: [
    'Harsh scrubs and strong chemicals',
    'Over-exfoliating',
    'Introducing many products at once',
    'Hot water and long soaking',
  ],
  useWhatYouOwn: [
    'Your current gentle cleanser',
    'A plain moisturizer from your routine',
  ],
  safetyBase: 'If symptoms worsen, appear suddenly, or are accompanied by pain, swelling, or spreading irritation, consult a qualified professional.',
  summaries: {
    gentle: 'A calm, supportive routine for overall care.',
    direct: 'Keep the area clean and moisturized.',
    curious: 'This gentle routine supports skin health and comfort.',
    minimal: 'Cleanse and moisturize. Nothing more for now.',
  },
  titles: {
    gentle: 'Gentle Care Routine',
    direct: 'Simple Care Plan',
    curious: 'Supportive Care Routine',
    minimal: 'Minimal Care Plan',
  },
};

export type { FallbackTemplate };
