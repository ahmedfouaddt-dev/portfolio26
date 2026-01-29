import Link from "next/link";
import ClientTemplateGrid from "./ClientTemplateGrid";
import Layout from "@/components/layout/Layout";
import { CATEGORIES } from "@/lib/templateData";
import { getProjectImages } from "@/lib/getProjectImages";

export default function SellPage() {
  // Populate screenshots server-side
  const categoriesWithImages = CATEGORIES.map(cat => ({
    ...cat,
    items: cat.items.map(item => ({
      ...item,
      screenshots: getProjectImages(item.id)
    }))
  }));

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <main className="main">
        <section className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div style={{ marginTop: 100 }}>
                <h1 className="fs-32 mb-2">
                  Ready-made Projects — Purchase & Setup
                </h1>
                <p className="text-muted mb-0">
                  I can setup, customize and deploy any of these full products
                  as a service. Click Preview to see screenshots, or Hire me to
                  get a tailored quote.
                </p>
              </div>
              <div>
                <Link href="/pricing" className="btn btn-primary">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Client Template Grid with Modal */}
            <ClientTemplateGrid categories={categoriesWithImages} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
