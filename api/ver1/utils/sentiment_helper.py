class SentimentInterpreter:
    def __init__(self):
        pass

    @staticmethod
    def compound_score_equivalence(compound_score):
        if compound_score >= 0.05:
            return "POSITIVE"
        elif compound_score <= -0.05:
            return "NEGATIVE"
        else:
            return "NEUTRAL"
