// Connects Fundisa AI frontend to your MCP server
class FundisaMCPClient {
  constructor() {
    this.offlineCache = new Map();
    this.syncQueue = [];
  }
  
  async generateLesson(capDoc, grade, subject) {
    // Try local MCP cache first (offline-first)
    const cacheKey = `${grade}-${subject}-${capDoc.hash}`;
    if (this.offlineCache.has(cacheKey)) {
      return this.offlineCache.get(cacheKey);
    }
    
    // Fallback to cloud MCP server
    try {
      const response = await fetch('https://mcp.thuto.co.za/api/v1/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          capDoc, 
          grade, 
          subject, 
          languages: ['en', 'zu', 'xh'] 
        })
      });
      const result = await response.json();
      
      // Cache for offline use
      this.offlineCache.set(cacheKey, result);
      return result;
    } catch (error) {
      // Return cached version or error with offline guidance
      return { error: 'Offline mode: Please check your connection or use cached content' };
    }
  }
  
  async recommendMatricMate(learnerId, grade, subject, score) {
    if (grade >= 7 && score >= 70) {
      const response = await fetch('https://mcp.thuto.co.za/api/v1/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          learner_id: learnerId,
          current_product: 'fundisa-ai',
          grade,
          subject,
          score,
          context: { user_type: 'learner' }
        })
      });
      
      const { recommendations } = await response.json();
      return recommendations.find(r => r.product === 'matricmate-ai');
    }
    return null;
  }
}
