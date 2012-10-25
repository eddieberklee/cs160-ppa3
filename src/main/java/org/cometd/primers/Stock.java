package org.cometd.primers;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

public class Stock {
        protected static DecimalFormat df = new DecimalFormat("0.00");
        protected String symbol = "";
        protected double value = 0.0d;
        protected double lastchange = 0.0d;
        protected int cnt = 0;

        public Stock(String symbol, double initvalue) {
            this.symbol = symbol;
            this.value = initvalue;
        }

        public void setCnt(int c) {
            this.cnt = c;
        }

        public int getCnt() {
            return cnt;
        }

        public String getSymbol() {
            return symbol;
        }

        public double getValue() {
            return value;
        }

        public void setValue(double value) {
            double old = this.value;
            this.value = value;
            this.lastchange = value - old;
        }

        public String getValueAsString() {
            return df.format(value);
        }

        public double getLastChange() {
            return this.lastchange;
        }

        public void setLastChange(double lastchange) {
            this.lastchange = lastchange;
        }

        public String getLastChangeAsString() {
            return df.format(lastchange);
        }

        public int hashCode() {
            return symbol.hashCode();
        }

        public boolean equals(Object other) {
            if (other instanceof Stock) {
                return this.symbol.equals(((Stock) other).symbol);
            } else {
                return false;
            }
        }

        public String toString(){
            StringBuilder buf = new StringBuilder("STOCK#");
            buf.append(getSymbol());
            buf.append("#");
            buf.append(getValueAsString());
            buf.append("#");
            buf.append(getLastChangeAsString());
            buf.append("#");
            buf.append(String.valueOf(getCnt()));
            return buf.toString();

        }

        public Object clone() {
            Stock s = new Stock(this.getSymbol(), this.getValue());
            s.setLastChange(this.getLastChange());
            s.setCnt(this.cnt);
            return s;
        }
    }